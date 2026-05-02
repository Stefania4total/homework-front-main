import React, { useState } from 'react';

export const HW3 = () => {

  const [currentText, setCurrentText] = useState('');

  const [texts, setTexts] = useState<string[]>([
    'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
  ]);

  const handleChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setCurrentText(event.target.value);
  };

  const handleSave = () => {
    if (currentText.trim() === '')
      return;
  };

  return (
    <div id={'hw03'}>
      {/* Если currentText НЕ пустой - показываем введенный текст */}
      {currentText ? (
          <h1 id={'hw03-text'}>{currentText}</h1>
      ) : (
          /* Если currentText пустой - показываем текст по умолчанию */
          <h1 id={'hw03-default-text'}>Здесь появится новое дело</h1>
      )}

      {/* Поле ввода */}
      <input
          id={'hw03-input'}
          type="text"
          value={currentText}
          onChange={handleChange}
      />

      {/* Кнопка сохранения */}
      <button id={'hw03-button'} onClick={handleSave}>
        Сохранить
      </button>

      {/* Заголовок списка */}
      <h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>

      {/* Список сохраненных текстов */}
      <ol id={'hw03-tasks'}>
        {texts.map((el, index) => {
          return (
              <li key={index} id={`hw03-task-${index}`}>
                {el}
              </li>
          );
        })}
      </ol>
    </div>
  );
};
