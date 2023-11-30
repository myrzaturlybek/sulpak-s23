<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse gap-12">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Оформите предзаказ уже сейчас</h1>
        <p class="py-6">Заполните форму и мы с вами свяжемся</p>
      </div>
      <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Номер телефона</span>
            </label>
            <input
              type="phone"
              placeholder="+7(777) 777-77-77"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">ФИО</span>
            </label>
            <input
              type="text"
              placeholder="ФИО"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Отправить</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
