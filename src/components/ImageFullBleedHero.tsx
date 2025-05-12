
export default function ImageFullBleedHero({
    imageUrl,
  }: {
    imageUrl: string;
  }) {
    return (
      <div className="w-full aspect-[2/1] sm:aspect-[3/1] bg-[#E0F7F3] flex items-center justify-center overflow-hidden border-neutral-200">
        <img
          src={imageUrl}
          alt="Hero"
          className="max-w-full h-auto object-contain mx-auto object-top"
        />
      </div>
    );
  }
  