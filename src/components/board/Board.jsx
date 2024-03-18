export default function Board() {
  // Генерируем массив ячеек для заполнения сетки
  const cells = Array.from({ length: 22 * 73 }, (_, index) => index + 1)
  return (
    <div className="flax flex-row h-auto w-10/12">
      <div className="h-full w-full bg-gray-100 flex justify-center items-center">
        <div
          className="grid grid-cols-73 grid-rows-22 gap-1 h-full w-full bg-orange-300"
          style={{ gridTemplateColumns: 'repeat(73, minmax(0, 1fr))' }}
        >
          {cells.map((cell) => (
            <div
              key={cell}
              className=" bg-amber-300 border border-orange-400 flex justify-center items-center"
              style={{ width: '1rem', height: '1rem' }}
            >
              {/* Здесь можете добавить содержимое ячейки */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
