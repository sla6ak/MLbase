export default function FilterClan() {
  // Генерируем массив кнопок
  const buttons = [
    { name: 'БезЛен', color: 'red-color-bt' },
    { name: '#ЛенаЕстъ', color: 'black-color-bt' },
    { name: 'OLD SCHOOL', color: 'brow-color-bt' },
    { name: 'ФЕНИКС', color: 'violet-color-bt' },
    { name: 'Slava Rycari', color: 'yellow-color-bt' },
    { name: 'ПРОМЕТЕЙ', color: 'sky-color-bt' },
    { name: 'Гравицапа', color: 'malinka-color-bt' },
    { name: 'Enigma/СССР', color: 'blue-color-bt' },
    { name: 'паук', color: 'lime-color-bt' },
    { name: 'KINGS', color: 'green-color-bt' }
  ]
  return (
    <div className="flex mt-6">
      {buttons.map(({ name, color }, index) => (
        <button
          key={index}
          className={`${color} text-white font-bold py-2 px-4 rounded mr-2`}
        >
          {name}
        </button>
      ))}
    </div>
  )
}
