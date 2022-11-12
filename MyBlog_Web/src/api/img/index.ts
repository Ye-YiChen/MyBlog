import { Notification } from "@arco-design/web-vue";
/**
 * 上传图片到图床（这里用的是雷电的图床，侵删）
 * @param data 照片数据
 */
async function uploadImgViaLeiDian(data: File) {
    // 使用fetch上传图 
    const formData = new FormData();
    formData.append("file", data);
    const res = await fetch("https://bbs.ldmnq.com/api/bbs/upload?dir=topic/attachment", {
        method: "POST",
        body: formData,
        headers: {
            // "Content-Type": "multipart/form-data: boundary=" + ,
            "Accept": "application/json",
            "Cache-Control": "no-cache",
            "X-Requested-With": "XMLHttpRequest"
        }
    })
    return res.json();

}

async function uploadImgVia58(data: File) {
    let file64: string;
    try {
        file64 = await blobToBase64(data) as string;
    } catch (error) {
        console.error(error);
        return error;
    }
    // 顺序不能乱
    const payload = `{"Pic-Size": "0*0","Pic-Encoding": "base64","Pic-Path": "/nowater/webim/big/","Pic-Data": ${file64.split(',')[1]}}`;
    const res = await fetch("https://upload.58cdn.com.cn/json", {
        method: "POST",
        body: payload,
        headers:{
            "Content-Type": "application/json",
        }
    })
    return res.json();
}



// 这个函数是用来返回图片的url的
// async function uploadImg(data: File): Promise<string> {
//     try {
//         const res = (await uploadImgViaLeiDian(data));
//         return res.data.data[0];
//     } catch (error: any) {
//         Notification.error({
//             title: '图片上传失败',
//             content: error,
//             duration: 3,
//         });
//         return error;
//     }
// }

async function uploadImg(data: File): Promise<string> {
    try {
        const url = await uploadImgVia58(data);
        return `https://pic3.58cdn.com.cn/nowater/webim/big/${url}`;
    } catch (error: any) {
        Notification.error({
            title: '图片上传失败',
            content: error,
            duration: 3,
        });
        throw new Error(error);
    }
}


function blobToBase64(file: File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })
}




export { uploadImg };