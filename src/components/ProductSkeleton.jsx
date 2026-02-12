function ProductSkeleton() {
  return (
    <div className="animate-pulse rounded-xl bg-white p-4 shadow-sm">
      <div className="mb-4 h-[260px] w-full rounded-xl bg-gray-200" />
      <div className="mb-3 h-5 w-full rounded bg-gray-200" />
      <div className="mb-4 h-5 w-2/3 rounded bg-gray-200" />
      <div className="flex items-center justify-between">
        <div className="h-5 w-20 rounded bg-gray-200" />
        <div className="h-5 w-24 rounded bg-gray-200" />
      </div>
    </div>
  )
}

export default ProductSkeleton
