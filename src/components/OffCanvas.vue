<script>
export default {
  name: "OffCanvas",
};
</script>

<template>
  <a
    class="btn btn-primary"
    data-bs-toggle="offcanvas"
    href="#offcanvasExample"
    role="button"
    aria-controls="offcanvasExample">
    Iscriviti!
  </a>
  <div
    class="offcanvas offcanvas-end w-50"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="container" id="body">
        <div class="row">
          <!-- header row -->
          <div class="col-6">
            <div class="title_input w-25">
              <h5>Nome</h5>
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="title_input w-25">
              <h5>Cognome</h5>
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <!-- document -->

          <!-- security row -->
          <div class="col-6">
            <div class="title_input w-25">
              <h5>Email</h5>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">@</span>
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="title_input w-25">
              <h5>Password</h5>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" name="" id="" />
            </div>
          </div>
          <!-- address row -->
          <div class="col-12">
            <div class="title_input w-25">
              <h5>Indirizzo</h5>
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <!-- città row -->
          <div class="col-6">
            <div class="title_input w-25">
              <h5>Città</h5>
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col-4">
            <div class="title_input w-25">
              <h5>Stato</h5>
            </div>
            <div class="input-group mb-3">
              <select class="form-select" id="inputGroupSelect01">
                <option selected>Scegli...</option>
                <option value="1">Italia</option>
                <option value="2">Germania</option>
              </select>
            </div>
          </div>
          <div class="col-2">
            <div class="title_input w-25">
              <h5>CAP</h5>
            </div>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <!-- photo row -->
          <div class="col-12">
            <div class="title_input w-25">
              <h5>Foto</h5>
            </div>
            <div class="input-group mb-3">
              <input type="file" class="form-control" id="inputGroupFile01" />
            </div>
          </div>
          <!-- section row -->
          <div class="col-4">
            <div class="input-group mb-3">
              <label for="check">
                <div class="input-group-text border-0 bg-white">
                  <input
                    class="form-check-input mt-0"
                    type="checkbox"
                    value="checkbox"
                    id="check"
                    aria-label="Checkbox for following text input"
                  />
                  <span class="p-3"> Seleziona per proseguire</span>
                </div>
              </label>
            </div>
          </div>
          <!-- choice row -->
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Salva</button>
            <button type="reset" class="btn btn-warning">Svuota</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
header {
  background-color: #161616;
  color: white;
}
</style>
