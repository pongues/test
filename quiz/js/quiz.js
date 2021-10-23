const $list = document.getElementById("quizlist");

const $inputs = new Array();
const $answers = new Array();

for(const quiz of quizzes){
	const $div = document.createElement("div");

	const $title = document.createElement("div");
	$title.setAttribute("class", "title");
	$title.appendChild(document.createTextNode(quiz.title));
	$div.appendChild($title);

	if(quiz.type === "text"){
		const $input = document.createElement("input");
		$input.setAttribute("type", "text");
		$div.appendChild($input);
		$inputs.push($input);
	}else if(quiz.type === "select"){
		const $input = document.createElement("select");
		for(const option of quiz.options){
			const $option = document.createElement("option");
			$option.appendChild(document.createTextNode(option));
			$option.setAttribute("value", option);
			$input.appendChild($option);
		}
		$div.appendChild($input);
		$inputs.push($input);
	}else{
		$inputs.push(document.createElement("input"));
	}

	const $answer = document.createElement("div");
	$div.appendChild($answer);
	$answers.push($answer);

	$div.appendChild(document.createElement("br"));
	$list.appendChild($div);
}

const $button = document.getElementById("quizbutton");
$button.addEventListener("click", function(e){
	for(let i=0, l=quizzes.length; i<l; i++){
		const quiz = quizzes[i];
		const $input = $inputs[i];
		const $answer = $answers[i];

		while($answer.lastChild) $answer.removeChild($answer.lastChild);
		if($input.value === quiz.answer){
			$answer.appendChild(document.createTextNode("正解"));
			$answer.setAttribute("class", "correct");
		}else{
			$answer.appendChild(document.createTextNode("不正解: " + quiz.answer));
			$answer.setAttribute("class", "incorrect");
		}
	}
});
