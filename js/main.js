const pinkButton = document.getElementById('pink-button');
const blueButton = document.getElementById('blue-button');
const yellowButton = document.getElementById('yellow-button');
const deleteButton = document.getElementById('delete-button');
const logoFile = document.getElementById('logo-file');
const umbrella =  document.getElementById('umbrella');
const logoImage = document.getElementById('logo')
const loader = document.getElementById('loader');
const body = document.getElementById('body');
const fileNameLabel = document.getElementById('file-name');

const BLUE = 'blue';
const PINK = 'pink';
const YELLOW = 'yellow';

let currentUmbrella = BLUE;



const delay = (umbrella, loader) =>{

    loader.classList.remove('hide')
    setTimeout(()=>{
        loader.classList.add('hide')
        umbrella.classList.remove('hide')
    }, 2000);
}




pinkButton.addEventListener('click', ()=> {
    if(currentUmbrella === PINK) return;
    currentUmbrella = PINK;
    umbrella.classList.add('hide');
    delay(umbrella, loader);
    umbrella.setAttribute('src', 'images/Pink umbrella.png');
    body.style.backgroundColor = '#fff1fa';
});

blueButton.addEventListener('click', ()=>{
    if(currentUmbrella === BLUE) return;
    currentUmbrella = BLUE;

    umbrella.classList.add('hide');
    delay(umbrella,loader);
    umbrella.setAttribute('src','images/Blue umbrella.png');
    body.style.backgroundColor = '#e0e0ff';
});

yellowButton.addEventListener('click', ()=>{
    if(currentUmbrella === YELLOW) return;
    currentUmbrella = YELLOW;

    umbrella.classList.add('hide');
    delay(umbrella,loader);
    umbrella.setAttribute('src','images/Yello umbrella.png');
    body.style.backgroundColor = '#ffffe3';
});

const showDeleteButton = (file) =>{
    logoFile.classList.add('hide');
    deleteButton.classList.remove('hide')
    fileNameLabel.innerText=file.split('\\')[2].toUpperCase();
}

deleteButton.addEventListener('click', ()=>{
    logoImage.setAttribute('src', '#');
    logoImage.classList.add('hide')
    deleteButton.classList.add('hide');
    fileNameLabel.innerText='Upload Logo'
})

const handler = (event)=>{
    const file = event.target.files[0];
    if(!file) {
        console.log('Choose one file!');
        return;
    }
    const fileSize = Math.round(file.size/(1024 * 1024)); // In MB
    if(fileSize>5){
        console.error('File size Exceed the limit !!', `File Size: ${fileSize}`)
        return;
    }
    const url = URL.createObjectURL(file);
    umbrella.classList.add('hide');
    delay(umbrella, loader);
    logoImage.setAttribute('src', url);
    logoImage.classList.remove('hide')
    showDeleteButton(event.target.value);
};


logoFile.addEventListener('change',handler)


document.getElementById('uploader').addEventListener('click', ()=>{
    logoFile.click();
})
