toBe(a) // 예상한 값이 매개변수와 같은 값일 것인지 확인합니다.
toEqual(obj) // 매개변수(객체)와 같은 값일 것이라 예상합니다. 객체가 가진 값의 비교가 가능합니다.
not.toBe(a) // 뒤의 결과를 부정하는 값과 비교합니다.

toBeNull() // 예상한 값이 null 인지 확인합니다.
toBeUndefined() // 예상한 값이 undefined 인지 확인합니다.
toBeDefined() // 예상한 값이 undefined 가 아닌지 확인합니다.
toBeTruthy() // 예상한 값이 truthy 한 값인지 확인합니다.
toBeFalsy() // 예상한 값이 falsy 한 값인지 확인합니다.

toBeGreaterThan(number); // number보다 큰 값인지 확인합니다.
toBeGreaterThanOrEqual(number); // number보다 크거나 같은 값인지 확인합니다.
toBeLessThan(number); // number보다 작은 값인지 확인합니다.
toBeLessThanOrEqual(number); // number보다 작거나 같은 값인지 확인합니다.
toBeCloseTo(float) // float인 매개변수와 같은 값인지 확인합니다. 부동소수점 에러를 해결하기 위해 고안되었습니다.

toMatch(string) // string을 포함하는 문자열인지 확인합니다.
toContain('item') // item을 포함하는 배열(iterator)인지 확인합니다.

toThrow() // 예외를 발생시키는지 확인합니다.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
