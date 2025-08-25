'use client'

const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="pageheader">

      <div>
      <h5>{title}</h5>
      <div></div>
      </div>

    </div>
  );
};

export default PageHeader;
