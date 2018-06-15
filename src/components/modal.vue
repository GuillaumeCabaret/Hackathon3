
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription">

        <section
          class="modal-body"
          id="modalDescription" >
          <slot name="body">
            Votre commande est validée !
          </slot>
        </section>
        <footer class="modal-footer">
          <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal">
              Merci
          </button>

        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  background: #8f8be6;
  border: 1px solid #8f8be6;
  border-bottom: 1px solid #8f8be6;
  border-radius: 18px 18px 18px 18px;
  box-shadow: 0 1px 0 #e6f5ff inset;
  color: #ffffff;
  cursor: pointer;
  display: block;
  padding: 10px 25px;
  width: 180px;
  margin-right: 5%;
}
</style>
