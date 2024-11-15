import Button from "../butoon/Button";

const BottomSection = ({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
  disablePrev,
  disableNext,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-4 p-3 bg-light rounded">
      <div className="small">
        Question {currentQuestion} of {totalQuestions}
      </div>
      <div className="d-flex gap-2">
        <button
          className="btn btn-outline-primary"
          onClick={onPrevious}
          disabled={disablePrev}
        >
          Back
        </button>
        <button
          className="btn btn-primary"
          onClick={onNext}
          disabled={disableNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BottomSection;
