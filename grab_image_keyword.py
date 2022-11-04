# 抓取(https://wallhaven.cc/)的图片
from ast import keyword
from numpy import number
import requests
from bs4 import BeautifulSoup

keyword = input('请输入关键字：\n')
numbers = int(input('请输入图片数量：\n'))
page = 1

# 获取span标签中的图片链接
while (numbers > 0):
    # 网址形如 https://wallhaven.cc/search?q=girl&page=2
    htm = requests.get('https://wallhaven.cc/search?q=%s&page=%s' %
                       (keyword, page))
    soup = BeautifulSoup(htm.text, 'lxml')
    a = soup.find_all('a', class_='preview')
    for i in a:
        links = i.get('href')
        # 对图片链接进行处理
        img_url = 'https://w.wallhaven.cc/full/' + links.split(
            '/')[-1][:2] + '/wallhaven-' + links.split('/')[-1] + '.jpg'
        # 保存图片
        img = requests.get(img_url)
        # 如果404则改变图片链接为png格式
        if img.status_code == 404:
            img_url = 'https://w.wallhaven.cc/full/' + links.split(
                '/')[-1][:2] + '/wallhaven-' + links.split('/')[-1] + '.png'
            img = requests.get(img_url)
        with open('img/' + img_url.split('/')[-1], 'wb') as f:
            f.write(img.content)

        numbers -= 1
        if numbers == 0:
            break
    page += 1
