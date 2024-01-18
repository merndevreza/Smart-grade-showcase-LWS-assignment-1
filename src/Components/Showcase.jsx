import SectionTitle from "./SectionTitle";
import StudentsTable from "./StudentsTable";

export default function Showcase() {
  return (
    <>
      <section className="py-24 lg:pt-[120px] lg:pb-28">
        <div className="container">
          <div className="mb-16 flex flex-col items-center">
            {/* section title */}
            <SectionTitle
              titlePrimary={"Students"}
              titleSecondary={"of the Year"}
            />
            {/* Students Table */}
            <StudentsTable/> 
          </div>
        </div>
      </section>
    </>
  );
}
