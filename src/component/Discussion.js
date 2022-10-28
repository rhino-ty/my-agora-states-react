// 디스커션 하나의 컴포넌트 짜기, HTML에 있던 거 그대로 들고오기
// 비어있는 항목 Props로 서버에서 데이터를 가져와 구현시킬 것임
// HTML 문법 바꾸기

export const Discussion = () => {
  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img className="discussion__avatar--image" src="" alt="" />
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href="">{}</a>
        </h2>
        <div className="discussion__information">{}</div>
      </div>
      <div className="discussion__answered">
        <p>{}</p>
      </div>
    </li>
  );
};
