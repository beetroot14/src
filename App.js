import React, { useState } from 'react';

function App() {
	const [value, setValue] = useState('');
	const [translate, setTranslate] = useState('');

	function func(event) {
		let trans = [];
		trans['А'] = 'A';
		trans['а'] = 'a';
		trans['Б'] = 'B';
		trans['б'] = 'b';
		trans['В'] = 'V';
		trans['в'] = 'v';
		trans['Г'] = 'G';
		trans['г'] = 'g';
		trans['Д'] = 'D';
		trans['д'] = 'd';
		trans['Е'] = 'E';
		trans['е'] = 'e';
		trans['Ё'] = 'Yo';
		trans['ё'] = 'yo';
		trans['Ж'] = 'Zh';
		trans['ж'] = 'zh';
		trans['З'] = 'Z';
		trans['з'] = 'z';
		trans['И'] = 'I';
		trans['и'] = 'i';
		trans['Й'] = 'Y';
		trans['й'] = 'y';
		trans['К'] = 'K';
		trans['к'] = 'k';
		trans['Л'] = 'L';
		trans['л'] = 'l';
		trans['М'] = 'M';
		trans['м'] = 'm';
		trans['Н'] = 'N';
		trans['н'] = 'n';
		trans['О'] = 'O';
		trans['о'] = 'o';
		trans['П'] = 'P';
		trans['п'] = 'p';
		trans['Р'] = 'R';
		trans['р'] = 'r';
		trans['С'] = 'S';
		trans['с'] = 's';
		trans['Т'] = 'T';
		trans['т'] = 't';
		trans['У'] = 'U';
		trans['у'] = 'u';
		trans['Ф'] = 'F';
		trans['ф'] = 'f';
		trans['Х'] = 'H';
		trans['х'] = 'h';
		trans['Ц'] = 'Ts';
		trans['ц'] = 'ts';
		trans['Ч'] = 'Ch';
		trans['ч'] = 'ch';
		trans['Ш'] = 'Sh';
		trans['ш'] = 'sh';
		trans['Щ'] = 'Sch';
		trans['щ'] = 'sch';
		trans['Ъ'] = "'";
		trans['ъ'] = "'";
		trans['Ы'] = 'I';
		trans['ы'] = 'i';
		trans['Ь'] = "'";
		trans['ь'] = "'";
		trans['Э'] = 'E';
		trans['э'] = 'e';
		trans['Ю'] = 'U';
		trans['ю'] = 'u';
		trans['Я'] = 'Ya';
		trans['я'] = 'ya';
		trans['«'] = '"';
		trans['»'] = '"';
		trans['-'] = '-';
		trans['—'] = '-';
		trans['№'] = '#';
		trans['`'] = "'";

		let result = '';

		let letter = event.target.value;

		setValue(event.target.value);

		for (let i = 0; i < letter.length; i++) {
			if (trans[letter[i]] != undefined) {
				result += trans[letter[i]];
			} else {
				result += letter[i];
			}
			setTranslate(result);
		}
	}

	return (
		<div>
			<textarea value={value} onChange={func} />
			<p>{translate}</p>
		</div>
	);
}

export default App;

// Пусть в textarea вводится текст. Сделайте так, чтобы в абзац выводился транслит вводимого текста.
