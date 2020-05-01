import React from "react";

function Card() {
  return (
    <div class="jumbotron text-center mx-2 cardColor">
      <h2 class="card-title h2">Material Design for Bootstrap</h2>

      <p class="my-4 h6">Powerful and free Material Design UI KIT</p>

      <div class="row d-flex justify-content-center">
        <div class="col-xl-7 pb-2">
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            aliquid dolorem ea distinctio exercitationem delectus qui, quas eum
            architecto, amet quasi accusantium, fugit consequatur ducimus
            obcaecati numquam molestias hic itaque accusantium doloremque
            laudantium, totam rem aperiam.
          </p>
        </div>
      </div>

      <hr class="my-4 rgba-white-light" />

      <div class="pt-2">
        <button type="button" class="btn btn-outline-white">
          Buy now <i class="far fa-gem ml-1" />
        </button>
        <button type="button" class="btn btn-outline-white">
          Download <i class="fas fa-download ml-1" />
        </button>
      </div>
    </div>
  );
}

export default Card;
