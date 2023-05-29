type TopNavBarProps = {
  name: string;
  companyName: string;
  isVerified: boolean;
};

const TopNavBar = (props: TopNavBarProps) => {
  return (
    <div className="pt-0 me-2 mb-2 d-flex justify-content-between bg-light rounded-end">
      <div className="p-4">
        <div className="fw-semibold">Hello {props.name},</div>
        <div className="fs-6 text-secondary">
          <i className="bi-buildings px-2"></i>
          <span>{props.companyName}</span>
          {props.isVerified ? (
            <i className="px-2 text-success bi-patch-check-fill"></i>
          ) : (
            ""
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TopNavBar;
