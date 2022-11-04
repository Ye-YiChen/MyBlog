# 抓取(https://wallhaven.cc/)的图片
import requests
from bs4 import BeautifulSoup

htm = requests.get('https://wallhaven.cc')
soup = BeautifulSoup(htm.text, 'lxml')
span = soup.find_all('span', class_='sm-thumb')

# 获取span标签中的图片链接
for i in span:
    links = i.find('a').get('href')
    # 对图片链接进行处理
    img_url = 'https://w.wallhaven.cc/full/' + links.split('/')[-1][:2] + '/wallhaven-' + links.split('/')[-1] + '.jpg'
    # 保存图片
    img = requests.get(img_url)
    # 如果404则改变图片链接为png格式
    if img.status_code == 404:
        img_url = 'https://w.wallhaven.cc/full/' + links.split('/')[-1][:2] + '/wallhaven-' + links.split('/')[-1] + '.png'
        img = requests.get(img_url)
    with open('img/' + img_url.split('/')[-1], 'wb') as f:
        f.write(img.content)