
      // 슬라이크 전체 크기(width 구하기)
      const slide = document.querySelector(".slide");
      let slideWidth = "1200";
      // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
      let slideItems = document.querySelectorAll(".slide_item");
      // 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
      const maxSlide = slideItems.length;
      // 무한 슬라이드를 위해 start, end 슬라이드 복사하기
      const startSlide = slideItems[0];
      const endSlide = slideItems[slideItems.length - 1];
      const startElem = document.createElement("div");
      const endElem = document.createElement("div");

      endSlide.classList.forEach((c) => endElem.classList.add(c));
      endElem.innerHTML = endSlide.innerHTML;

      startSlide.classList.forEach((c) => startElem.classList.add(c));
      startElem.innerHTML = startSlide.innerHTML;
      // 각 복제한 엘리먼트 추가하기
      slideItems[0].before(endElem);
      slideItems[slideItems.length - 1].after(startElem);

      let currSlide = 1;
      let offset = slideWidth + currSlide;
      slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
      });
      function nextMove() {
        currSlide++;
        // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
        if (currSlide <= maxSlide) {
          // 슬라이드를 이동시키기 위한 offset 계산
          const offset = slideWidth * currSlide;
          // 각 슬라이드 아이템의 left에 offset 적용
          slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
          });
        } else {
          // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
          currSlide = 0;
          let offset = slideWidth * currSlide;
          slideItems.forEach((i) => {
            i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
          });
          currSlide++;
          offset = slideWidth * currSlide;
          // 각 슬라이드 아이템의 left에 offset 적용
          setTimeout(() => {
            // 각 슬라이드 아이템의 left에 offset 적용
            slideItems.forEach((i) => {
              // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
              i.setAttribute(
                "style",
                `transition: ${0.15}s; left: ${-offset}px`
              );
            });
          }, 0);
        }
      }
      function prevMove() {
        currSlide--;
        // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
        if (currSlide > 0) {
          // 슬라이드를 이동시키기 위한 offset 계산
          const offset = slideWidth * currSlide;
          // 각 슬라이드 아이템의 left에 offset 적용
          slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
          });
          // 슬라이드 이동 시 현재 활성화된 pagination 변경
          paginationItems.forEach((i) => i.classList.remove("active"));
          paginationItems[currSlide - 1].classList.add("active");
        } else {
          // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
          currSlide = maxSlide + 1;
          let offset = slideWidth * currSlide;
          // 각 슬라이드 아이템의 left에 offset 적용
          slideItems.forEach((i) => {
            i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
          });
          currSlide--;
          offset = slideWidth * currSlide;
          setTimeout(() => {
            // 각 슬라이드 아이템의 left에 offset 적용
            slideItems.forEach((i) => {
              // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
              i.setAttribute(
                "style",
                `transition: ${0.15}s; left: ${-offset}px`
              );
            });
          }, 0);

        }
      }
      // 기본적으로 슬라이드 루프 시작하기
      let loopInterval = setInterval(() => {
        nextMove();
      }, 2000);
