## 테스트 코드 예시

- sum
    
    ```jsx
    export const sum =(a,b)=>{ return a+b}
    ```
    
    ```jsx
    import {sum} from './Sum';
    
    //test('테스트 코드 명칭' , 테스트 코드)
    test('sum test',()=>{
      // 값 1,2를 넣으면.3
      expect(sum(1,2)).toEqual(3);
      // 값 2,2를 넣으면.4
      expect(sum(2,2)).toEqual(4);
    })
    ```
    
- getUser
    
    ```jsx
    export const getUser=(id) =>{
      return {
        id,
        email: `user${id}@test.com`,
      };
    }
    ```
    
    ```jsx
    import {getUser} from './User';
    
    test("return a user object", () => {
    
      expect(getUser(1)).toEqual({
        id: 1,
        email: `user1@test.com`,
      });
    });
    ```
    
- checkArr
    
    ```jsx
    test("array length 테스트", () => {
    
      const colors = ["Red", "Yellow", "Blue"];
    
      // 배열길이 3
      expect(colors).toHaveLength(3);
     
    // Yellow 문자열 원소를 가지고 있는지
      expect(colors).toContain("Yellow"); 
    
    // Green 문자열 원소를 안가지고 있는지
      expect(colors).not.toContain("Green"); 
    
    });
    ```
    
- checkString
    
    ```jsx
    test("string", () => {
    
    // 단순 문자열 비교
      expect(getUser(1).email).toBe("user1@test.com"); 
    
    // 정규식 비교
      expect(getUser(2).email).toMatch(/.*test.com$/); 
    
    });
    ```
    
- 숫자 0과 문자열 0의 구별 (숫자 0 : false / 문자열 0 : true)
    
    ```jsx
    test("number 0 is falsy but string 0 is truthy", () => {
      expect(0).toBeFalsy(); // 숫자 0은 false를 의미하기도 하다. true
      expect("0").toBeTruthy(); // 문자열은 true를 의미하기도 하다. true
    });
    ```
    
- 배열 검사 (배열길이검사/특정원소검사)
    
    ```jsx
    test("array length 테스트", () => {
      const colors = ["Red", "Yellow", "Blue"];
    
      // 배열길이 3
      expect(colors).toHaveLength(3);
    
    // Yellow 문자열 원소를 가지고 있는지
      expect(colors).toContain("Yellow");
    
    // Green 문자열 원소를 안가지고 있는지
      expect(colors).not.toContain("Green");
    
    });
    ```
    
    ```jsx
    //~ 배열 길이 확인
    // [arr요소, arr요소복사본1, arr요소복사본2]
    test('arr 길이 확인',()=>{
      expect(arr("arr요소")).toHaveLength(3);
    })
    
    //~ 배열 요소 가지고 있는지 확인
    // [arr요소, arr요소복사본1, arr요소복사본2]
    test('arr 요소 유 확인',()=>{
      expect(arr("arr요소")).toContain("arr요소복사본1")
    })
    
    //~ 배열 요소 안가지고 있는지 확인
    // [arr요소, arr요소복사본1, arr요소복사본2]
    test('arr 요소 무 확인',()=>{
      expect(arr("arr요소")).not.toContain("arr복사본3")
    })
    ```
    
- 예외 발생 여부
    
    ```jsx
    test("id 가 음수일 때 error", () => {
      //! 예외 검증할 때는 함수를 한번 더 감싸줘야함.
      expect(() => makeRandomEmail(-1)).toThrow();
      //
      expect(() => makeRandomEmail(-1)).toThrow("Invalid ID");
    });
    ```
    
- 객체 key, value 값이 있는지 검사
    
    ```jsx
    test("find user property", async () => {
       const user = {
          id : 1,
          name : "Leanne Graham"
       }
       
    // {id:1} 이 user 객체에 있는지
       expect(user).toHaveProperty("id", 1); 
    
    //{nam:"yoon"} 이 user 객체에 있는가
       expect(user).toHaveProperty("name", "yoon");
     });
    
    ```
    
    ---
    
    ```jsx
    export const makeRandomEmail=(id)=> {
      if (id <= 0)
        throw new Error("Invalid ID"); // id가 음수일경우 error throw
      
      return {
        id,
        name:"yoon",
        email: `user${id}@test.com`,
      };
    }
    
    -------------test-------------
    
    test("해당 key 가 있는지 확인",  () => {
        // { id : 1 } 이 user 객체에 있느냐? -> true
      expect(makeRandomEmail(1)).toHaveProperty("id", 1); 
    
      expect(makeRandomEmail(1)).toHaveProperty("name", "yoon");
    
    });
    ```
