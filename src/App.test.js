import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //App 컴포넌트를 가상의 screen에 그린다. Test하기 위한 대상을 준비시켜 둔 것이다.
  render(<App />);
  //가상의 screen에 'learn react' 텍스트를 가진 Element를 반환한다.
  const linkElement = screen.getByText(/learn react/i);
  //linkElement가 현재 그려진 Document에 있는지 없는지 확인한다. App 컴포넌트에 'learn react' 텍스트를 그려준 Element가 있는지 확인하는 것. (<App/>에 해당 텍스트가 입력되어 있다.)
  expect(linkElement).toBeInTheDocument();
});


// 결과적으로 App을 Render했을 때
// screen에 'learn react' 텍스트가 있다/같다 -> 테스트 성공
// screen에 'learn react' 텍스트가 없다/다르다 -> 테스트 fail