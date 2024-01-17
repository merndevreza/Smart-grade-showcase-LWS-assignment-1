export default function SectionTitle({ titlePrimary, titleSecondary }) {
  return (
    <h2 className="text-3xl lg:text-[40px] mb-9 font-bold text-center">
      <span className="text-[#00CC8C]">{titlePrimary}</span> {titleSecondary}
    </h2>
  );
}
