import { artists } from "../../../app/data/artists";

interface ArtistPageProps {
  params: Promise<{ id: string }>;
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { id } = await params;
  const artist = artists.find((a) => a.id === Number(id));

  if (!artist) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
        <p className="text-lg">Artista não encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-900 text-white p-4 md:p-10">

      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-center">
        {artist.title}
      </h1>


      <img
        src={artist.bg}
        alt={artist.title}
        className="w-full max-w-md md:max-w-2xl  shadow-lg object-cover"
      />

      {/* Bio/descrição opcional */}
      <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl text-center leading-relaxed">
        Aqui vai o texto e outras obras de {artist.title}.

      </p>
    </div>
  );
}