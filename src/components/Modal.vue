<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription">
        <header
          class="modal-header"
          id="modalTitle">
          <slot name="header">
            <div> Welcome to TapTapVue!
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal">  x
            </button></div>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription">
          <slot name="body">
            Your Username is {{username}} 
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            Ready to see who has the fastest fingers?
          </slot>
          <br>
          <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal">
              I'm Ready
            </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
        this.$pnPublish({
          channel: 'lobby',
          message: this.$store.state.username
        });
      }
    },
    computed: {
      ...mapGetters({
     username: 'getMyUsername',
      }),
    },
    mounted() {
      this.$pnSubscribe({
        channels: ["lobby"]
      });
    },
  };
</script>

<style scoped>
  button {
    position: relative;
    top: 0px;
    border: none;
    color: #fff;
    width: 40px;
    height: 40px;
    transition: 0.3s;
    border-radius: 1%;
    background-color: #f2ca27;
  }
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
    background: #FFFFFF;
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
    color: #4AAE9B;
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
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>
