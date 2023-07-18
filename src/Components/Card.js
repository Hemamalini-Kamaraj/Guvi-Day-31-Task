const Card = (props) => {
  return (
    <div className="p-5">
      <div className="card  text-center">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div
              className={`text-md font-weight-bold  text-uppercase mb-4 mt-4`}
            >
              No. Of Students : &nbsp;{props.students}
            </div>
            <div className={`text-md font-weight-bold  text-uppercase mb-4`}>
              No. Of Teachers : &nbsp;{props.teachers}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
