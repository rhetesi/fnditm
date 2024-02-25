'use strict';

/* Modal html example
<!-- Modal -->
  <div class="modal-div">

    <!-- A Modal -->
    <div class="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">

          <!-- Modal fejléce -->
          <div class="modal-header">
            <h4 class="modal-title"></h4>
          </div>

          <!-- Modal tartalma -->
          <div class="modal-body">
            <div class="getback__check">
              <h5 class="getback__check--title">Kiadási pénztárbizonylat</h5>
              <div class="getback__pay">
                <div class="getback__pay--header"><small>Pénztár fizessen az alábbiak szerint</small></div>
                <div class="customernamediv"><small>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . -nak</small></div>
                <div class="getback__pay--amount mt-2"></div>
              </div>
            </div>
            <div class="getback__deposit mt-3"></div>
          </div>

          <!-- Modal lábléce -->
          <div class="modal-footer">
            <button type="button" class="btn btn-warning text-white" data-bs-dismiss="modal">Bezár(ható, a kiadási
              pénztárbizonylat kitöltve!)</button>
          </div>

        </div>
      </div>
    </div>

  </div> */

  /* 
  Modal:

  Jelenítse meg a kiválasztott elem részletes adatait
  A Modal kártya formátumban jelenjen meg
                a kártya bal oldAlán jelenjen meg a tárgy fotója
                a kártya job oldalán részletes leírás a tárgyról
  A jobb felső sarokban legyen egy bezárás gomb
  A lábléc tartalmazza az engedélyezett műveletek gombjait
                kiad/átad
                módosít (vezető)
                töröl (vezető)
  Az engedélyezett műveletek legyenek jogosultsághoz kötve
  A kért műveletet követően a Modál záródjon be, és frissüljön a tárgyak listája 
  
  Ugyanez a MOdal legyen használható új elem felvitelére, ilyenkor a szükséges mezők legyenek szerkeszthetők
  */