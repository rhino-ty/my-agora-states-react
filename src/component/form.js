// 폼 컴포넌트 만들기, 전에 작성했던 HTML 그대로 가져오기
// html과 다른 문법 수정: class를 className으로, 라벨의 for를 htmlFor로
export const Form = () => {
  return (
    <section className="form__container">
      <form action="" method="get" className="form">
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <label htmlFor="name">이름</label>
            <input type="text" name="name" id="name" required placeholder="이름을 입력하세요" />
          </div>
          <div className="form__input--title">
            <label htmlFor="name">제목</label>
            <input type="text" name="name" id="name" required placeholder="제목을 작성하세요" />
          </div>
          <div className="form__textbox">
            <label htmlFor="story">질문 내용</label>
            <textarea id="story" name="story" placeholder="질문을 작성하세요" required></textarea>
          </div>
        </div>
        <div className="form__submit">
          <input type="submit" value="제출🦏" className="submitButton" />
        </div>
      </form>
    </section>
  );
};
