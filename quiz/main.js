const questions = [
	{ buttonId: "button1", inputId: "input1", outputId: "output1", submitted: false, type: "text", answer: "ぽんゲス" },
	{ buttonId: "button2", inputId: "input2", outputId: "output2", submitted: false, type: "text", answer: "ぽん" },
];

let point = 0;
const pointOutputTag = document.getElementById("output");

function show_point(){
	pointOutputTag.innerText = point + "点";
}

show_point();

for(const q of questions){
	const button = document.getElementById(q.buttonId);
	button.addEventListener("click", function(e){
		if(!q.submitted){
			const inputTag = document.getElementById(q.inputId);
			const outputTag = document.getElementById(q.outputId);
			const value = inputTag.value;
			if(value == q.answer){
				outputTag.innerHTML = "<font class='correct'>正解</font><br/><font>君は偉い</font>"
				point++;
				show_point();
			}else{
				outputTag.innerHTML = "<font class='incorrect'>不正解</font><br/><font>正解は「" + q.answer + "」</font>"
			}
			inputTag.readOnly = true;
			q.submitted = true;
		}
	}, false);
}
