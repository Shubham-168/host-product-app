function ViewToggle({ viewMode, onChangeView }) {
  return (
    <div className="hidden items-center overflow-hidden rounded-lg border border-gray-300 bg-white sm:flex">
      <button
        type="button"
        onClick={() => onChangeView('grid')}
        className={`cursor-pointer px-3 py-2 transition ${
          viewMode === 'grid' ? 'bg-lime-300 text-gray-900' : 'text-gray-500 hover:bg-gray-100'
        }`}
      >
        ▦
      </button>
      <button
        type="button"
        onClick={() => onChangeView('list')}
        className={`cursor-pointer px-3 py-2 transition ${
          viewMode === 'list' ? 'bg-lime-300 text-gray-900' : 'text-gray-500 hover:bg-gray-100'
        }`}
      >
        ☰
      </button>
    </div>
  )
}

export default ViewToggle
