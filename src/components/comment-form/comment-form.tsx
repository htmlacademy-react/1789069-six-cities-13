import { useState, FormEvent, ChangeEvent, Fragment } from 'react';

type FieldChangeEvent = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>;

const ratingList = [
  { rating: 5, title: 'perfect' },
  { rating: 4, title: 'good' },
  { rating: 3, title: 'not bad' },
  { rating: 2, title: 'badly' },
  { rating: 1, title: 'terribly' }
];

function CommentForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: -1,
    review: ''
  });

  const handleFieldChange = ({target}: FieldChangeEvent) => {
    const {name, value} = target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form
      className="reviews__form form"
      action="#" method="post"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratingList.map(({ rating, title }) => (
          <Fragment key={rating}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={rating}
              id={`${rating}-stars`}
              type="radio"
              checked={formData.rating === rating}
              onChange={handleFieldChange}
            />
            <label
              htmlFor={`${rating}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={handleFieldChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{''}
          <span className="reviews__star">rating</span> and describe your stay with
          at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
