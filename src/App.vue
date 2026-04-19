<script setup></script>

<template>
  <div id="redirect-notice" style="
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  ">
    <h1 style="font-size: 2rem; margin-bottom: 20px;">사이트 주소가 변경되었습니다</h1>
    <p style="font-size: 1.2rem; margin-bottom: 30px;">새로운 주소로 이동해 주세요.</p>
    <a href="https://midzy.vercel.app" style="
      background: #007bff;
      color: white;
      padding: 15px 30px;
      text-decoration: none;
      border-radius: 5px;
      font-size: 1.2rem;
      display: inline-block;
      transition: background 0.3s;
    " onmouseover="this.style.background='#0056b3'" onmouseout="this.style.background='#007bff'">새 사이트로 이동</a>
  </div>
  <RouterView />
</template>
