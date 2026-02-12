import { CATEGORY_OPTIONS } from '../features/products/productSlice'

const collectionTags = ['All', 'Best sellers', 'New arrivals', 'Accessories']

function Sidebar({ activeCategory, categoryCounts, onCategoryChange }) {
  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-gray-900">Filters</h2>
      </div>

      <section className="border-b border-gray-200 pb-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">Collections</h3>
          <span className="text-2xl text-gray-400">−</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {collectionTags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                tag === 'All'
                  ? 'bg-lime-200 text-lime-900'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="pt-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">Categories</h3>
          <span className="text-2xl text-gray-400">−</span>
        </div>

        <ul className="space-y-3">
          {CATEGORY_OPTIONS.map((category) => {
            const isActive = activeCategory === category.value
            const count = categoryCounts[category.value] ?? 0

            return (
              <li key={category.value}>
                <button
                  type="button"
                  onClick={() => onCategoryChange(category.value)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all duration-200 ${
                    isActive
                      ? 'bg-green-100 text-green-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-base">{category.label}</span>
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600">
                    {count}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar
