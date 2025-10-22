import { useState } from "react";
import { X } from "lucide-react";

const photos = [
  { id: 1, src: "/1.png", alt: "Beautiful moment 1" },
  { id: 2, src: "/2.png", alt: "Beautiful moment 2" },
  { id: 3, src: "/3.png", alt: "Beautiful moment 3" },
  { id: 4, src: "/4.png", alt: "Beautiful moment 4" },
  { id: 5, src: "/5.png", alt: "Beautiful moment 5" },
  { id: 6, src: "/6.png", alt: "Beautiful moment 6" },
];

export const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <>
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-script text-center mb-4 text-primary">
            Celebrating You ✨
          </h2>
          <p className="text-center text-muted-foreground mb-12 font-body">
            A beautiful soul deserves to be celebrated 💕
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 transition-all duration-500 rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-elegant animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
