export function ImageGrid({ images }: { images: string[] }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {images.map((img, i) => (
          <div key={i} className="border rounded shadow p-2">
            <img src={img} alt="Generated" className="rounded" />
          </div>
        ))}
      </div>
    )
  }
  