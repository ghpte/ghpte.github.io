console.log('here')

const buttonArray = document.getElementsByTagName('button');
console.log(buttonArray);

const mainDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');

buttonArray[0].onclick = () => {
	document.getElementById('question').classList.add('hidden');
	document.getElementsByTagName('button')[0].classList.add('hidden');
	document.getElementsByTagName('button')[1].classList.add('hidden');
	document.getElementById('question').classList.remove('visible');
	document.getElementById('answer').classList.add('visible');
	document.getElementById('answer').classList.remove('hidden');
}

buttonArray[1].onclick = () => {
	document.getElementById('question').classList.add('hidden');
	document.getElementsByTagName('button')[0].classList.add('hidden');
	document.getElementsByTagName('button')[1].classList.add('hidden');
	document.getElementById('question').classList.remove('visible');
	document.getElementById('answer').classList.add('visible');
	document.getElementById('answer').classList.remove('hidden');
}