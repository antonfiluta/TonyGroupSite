function generateNews(i) {
    let newsBody = document.createElement('div');
    let h2 = document.createElement('h2');
    let date = document.createElement('span');
    let textBlock = document.createElement('div');
    let imageBlock = document.createElement('div');
    let hideImageBlock = document.createElement('div');
    let hideImageBlockWrapper = document.createElement('div');
    let hideBox = document.createElement('div');
    let textButton = document.createElement('button');
    
    
    
    
    mainBlock.append(newsBody);
    newsBody.className = "news-wrapper"; // создаем тело новости
    
    newsBody.prepend(h2);
    h2.innerHTML = newsInform[i].headText; //заголок
    h2.className = "news-h2";
    
    h2.after(date);
    date.innerHTML = newsInform[i].dateText; // date
    date.className = "date";
    
    date.after(textBlock);
    textBlock.className = "hide-block-wrapper"; // блок в котором находится текст, кнопка и фотки
    
    textBlock.prepend(hideBox); // блок с тексом
    hideBox.className = "hide-block";
    
    for (let k = 0; k < newsInform[i].newsText.length; k++) { // текст
       let p = document.createElement('p');
       hideBox.append(p);
       p.className = "hide-text";
       p.innerHTML = newsInform[i].newsText[k];
    }
    
    hideBox.after(textButton); 
    textButton.className = "hide-block-button";
    textButton.innerHTML = "Читать дальше...";
    textButton.onclick = () => showNews(i, event);

    textButton.after(imageBlock);
    imageBlock.className = "news-images-wrapper"; // блок фоток

    showImageBoxesWrapper.append(hideImageBlock); //не видимий изначально блок
    hideImageBlock.className = "showImageBox";
    hideImageBlock.prepend(hideImageBlockWrapper);
    hideImageBlockWrapper.className = "image-bottom-block";


    for (let k = 0; k < newsInform[i].images.length; k++) { // число фотографий
        let imageBox = document.createElement('div');
        let img = document.createElement('img');
        let hideImgBox = document.createElement('div');
        let hideImg = document.createElement('img');

        imageBlock.append(imageBox);
        imageBox.className = "news-images-box";
        imageBox.append(img);
        img.src = newsInform[i].images[k]; //url картинки
        img.alt = newsInform[i].alts[k];
        img.title = "click me";

        hideImageBlockWrapper.append(hideImgBox);
        hideImgBox.className = "image-bottom-block-box";
        hideImgBox.append(hideImg);
        hideImg.className = "image-bar";
        hideImg.src = img.src;
        hideImg.alt = img.alt;

        img.addEventListener('click', () => {
            showImg(i); //номер новости, начинается с нуля
            chengeImg((k + 1), (i + 1)) //first -- number of the image (start from 1), second -- number of the group (start from 1, == showImg + 1)
        })

        hideImg.addEventListener('click', () => {
            chengeImg((k + 1), i + 1)
        })
    }
}




for (let i = 0; i < newsInform.length; i++) {
    generateNews(i)
}
