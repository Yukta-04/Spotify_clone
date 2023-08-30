console.log("Welcome To Spotify");
let index=0;
let audioElement=new Audio('sounds/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let displayName=document.getElementById('displayName');
let currentTime=document.getElementById('currentTime')
let totalTime=document.getElementById('totalTime');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
{songName:"Hoshwalon Ko Khabar Kya", filePath:"sounds/1.mp3", coverPath:"image/mp1.jpg"},
{songName:"Isharon Isharon Men Dil Lenewale", filePath:"sounds/2.mp3", coverPath:"image/mp1.jpg"},
{songName:"Jaane Kahan Mera Jigar Gaya Ji", filePath:"sounds/3.mp3", coverPath:"image/mp1.jpg"},
{songName:"Kasoor", filePath:"sounds/4.mp3", coverPath:"image/mp1.jpg"},
{songName:"Sagar Kinare Dil Ye Pukare", filePath:"sounds/5.mp3", coverPath:"image/mp1.jpg"},
{songName:"Yeh Dil Tum Bin Lagta", filePath:"sounds/6.mp3", coverPath:"image/mp1.jpg"},
]
//Handle Play Pause Click
/*songItems.forEach((element,i)=>{
	console.log()
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
})
*/

masterPlay.addEventListener('click',()=>{
	if(audioElement.paused || audioElement.currentTime<=0){
		audioElement.play();
		masterPlay.classList.remove('fa-play-circle');
		masterPlay.classList.add('fa-pause-circle');
		gif.style.opacity=1;
	}
	else{
		audioElement.pause();
		masterPlay.classList.remove('fa-pause-circle');
		masterPlay.classList.add('fa-play-circle');
		gif.style.opacity=0;

	}

})
//Listen To Events
function formatTime(minutes, seconds) {
  const leadingZero = (value) => (value < 10 ? "0" + value : value);

  const formattedMinutes = leadingZero(minutes);
  const formattedSeconds = leadingZero(seconds);

  return `${formattedMinutes}:${formattedSeconds}`;
}


audioElement.addEventListener('timeupdate',()=>{
	const minutes = Math.floor(audioElement.currentTime / 60);
	const seconds = Math.floor(audioElement.currentTime % 60);
	currentTime.innerText = formatTime(minutes, seconds);
	const min = Math.floor(audioElement.duration / 60);
	const sec = Math.floor(audioElement.duration % 60);
	totalTime.innerText = formatTime(min, sec);
	progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
	myProgressBar.value=progress;
});

myProgressBar.addEventListener('change',()=>{
	audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays=()=>{
	Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
		console.log('element')
		element.classList.remove('fa-pause-circle');
		element.classList.add('fa-play-circle');
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

	element.addEventListener('click',(e)=>{
		console.log(e.target);
		makeAllPlays();
		index=parseInt(e.target.id);
			console.log(e.target.classList);
			e.target.classList.remove('fa-play-circle');
			e.target.classList.add('fa-pause-circle');
			audioElement.src=`sounds/${index+1}.mp3`;
			audioElement.currentTime=0;
			audioElement.play();
			masterPlay.classList.remove('fa-play-circle');
			masterPlay.classList.add('fa-pause-circle');
			gif.style.opacity=1;
			displayName.innerText=songs[index].songName;


	})

})

document.getElementById('next').addEventListener('click',()=>{
	if(index>=5){
		index=0;
	}
	else{
        index+=1;
	}
		makeAllPlays();
		const elements = document.querySelectorAll('.songItemPlay');
		const targetElement = elements[index];
		targetElement.classList.remove('fa-play-circle');
		targetElement.classList.add('fa-pause-circle');
		audioElement.src=`sounds/${index+1}.mp3`;
		audioElement.currentTime=0;
		audioElement.play();
		masterPlay.classList.remove('fa-play-circle');
		masterPlay.classList.add('fa-pause-circle');
		gif.style.opacity=1;
		displayName.innerText=songs[index].songName;

})
document.getElementById('back').addEventListener('click',(event)=>{
	if(index<=0){
		index=5;
	}
	else{
        index-=1;
	}	
	makeAllPlays();
		const elements = document.querySelectorAll('.songItemPlay');
		const targetElement = elements[index];
		targetElement.classList.remove('fa-play-circle');
		targetElement.classList.add('fa-pause-circle');
		audioElement.src=`sounds/${index+1}.mp3`;
		audioElement.currentTime=0;
		audioElement.play();
		masterPlay.classList.remove('fa-play-circle');
		masterPlay.classList.add('fa-pause-circle');
		gif.style.opacity=1;
		displayName.innerText=songs[index].songName;

})
