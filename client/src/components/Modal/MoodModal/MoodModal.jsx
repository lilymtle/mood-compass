// import styling
import "./MoodModal.scss";

export function MoodModal({ isOpen, onClose, moodOptions, onSelectMood }) {
    if (!isOpen) return null;

    return (
        <div className="modal">
        <div className="modal__content">
            <button className="modal__close" onClick={onClose}>✖</button>
            <h2>Select Your Mood</h2>
            <div className="mood__options">
                {moodOptions.map(option => (
                    <div
                        className="mood__option"
                        key={option.id}
                        onClick={() => onSelectMood(option)}
                    >
                        <span className="mood__emoji">{option.emoji}</span>
                        <span className="mood__description">{option.description}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
};