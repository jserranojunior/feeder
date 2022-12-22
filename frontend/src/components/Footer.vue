<template>
  <footer
    class="footer px-12 md:px-40 py-6 bg-neutral text-neutral-content align-center justify-between"
  >
    <div class="my-auto px-">
      <img src="../assets/images/logo.png" width="60" alt="" />

      <p>
        Feeder Industria LTDA<br />Copyright © 2022 - Todos os direitos
        reservados
      </p>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full justify-center mx-auto text-center">
        <span class="footer-title text-center">Sistema de gestão</span>
      </div>
      <div class="card w-24 mx-auto bg-base-100 shadow-xl p-1">
        <div class="card-body p-1">
          <img
            src="/static/img/certificados/sistemadegestao.jpg"
            class="mt-1"
            style="width: 100%"
            width="100"
            height="100"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full">
        <span class="footer-title"> D&B D-U-N-S® Registered™</span>
      </div>

      <div class="card w-32 bg-base-100 shadow-xl p-1">
        <a
          href="https://profiles.dunsregistered.com/TPBRBasicProfileENG.aspx?ListArea=900&SealkeyQ=B353583085517#"
          target="_blank"
        >
          <div class="card-body p-1 flex">
            <div class="w-full">
              <img
                src="/static/img/certificados/duns.png"
                class="mt-1"
                style="border-width: 0px; width: 80px"
                width="80"
              />
            </div>
          </div>
        </a>
      </div>
      <div class="card w-24 bg-base-100 shadow-xl p-1">
        <a
          href="https://profiles.dunsregistered.com/TPBRBasicProfileENG.aspx?ListArea=900&SealkeyQ=B353583085517#"
          target="_blank"
        >
          <div class="card-body p-1 flex">
            <div class="w-full">
              <img
                id="Image1"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBaRXhpZgAATU0AKgAAAAgABQMBAAUAAAABAAAASgMDAAEAAAABAAAAAFEQAAEAAAABAQAAAFERAAQAAAABAAAOw1ESAAQAAAABAAAOwwAAAAAAAYagAACxj//bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAFIAUgMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOLkk8L+G/A/ha7u/CNtql3qUE0k00t3LGcpKVHCnHTH5V6h8N9P0qy+INvcaRpqafBqHhWC9e3SRnCu8vPLEnoAPwrL0zw3qtt4M0ZJbnwBqelRMbexu7+1mlLF5D8ob3bI4A6VZggvG1HxHNN4o8OWF/ZaIdNVdKMsK2KxyghmByVAJI49uKANa81i8vpNU8QaBaNp+mX7xwXGs24M13uhbYB9nYFcBty5/ukt2rlfGGi3Os3Z1XW7rSNU0XT7N7JtTW/US5JL+cI0wDKBuxHnBq3p+oW2uX3ijwx4e8UQWcc8Ni1i0E7JH8qs90Y9o4LYYscck81g6pHo+n2MGm6NbLrmi3F2lgrWSq6ESZG5s4BvcZ2PjAB6UAdt4psvhnpfh/w/qvifTpr0XFlDb21wBIHdEjBXcqsAODRpLeEPGfwm0rS5rzTtDtTN5zWP2sMUCTMSp3sG+br/AMC4rgbW1fTNf8OR+NYNbj0mK9mRE12RZLVbcRkRqF5w44z26YqfWZvDUupaX9g0jRNWuV0y++2RaFaqIlfH7uTa3PyjnJ5GDigCX4hfDTw5pngu61bw3eWE5XUXlMv2ofu4fLz5CfMQxBwf7xzVjwFoepSarpPjzVdXjFxawzx30d2Uha2TymitzjjIbIxkDPvWJ4D0LRNb0ea4j1oRW+mW/wBsl0zVJd0BvF2hp3jVcGAqwX+9kdcVc1CNtIv9U120W+8QaNOtpGk87CbTpWyEdJVOCyoWxGP4SB1oA0La+0nxf8P9FaaN7i+vPEtlFrTuCvnyNuB6HA+TA+XFZ2kt4L1L4nf8Ik3gSzSL7dNa/aBfTlsIWGcbu+2u21jS2L6hpFja6F4ek0rVItYsg9uYkuLeBctI4T7wDHBIxwKuWHhfxbJcw67Y2Pw8NxN/pMd7HYTB23jO8NnOTnOfegD5fmUJPIqjChiAPxor2R/2c/EjuznWNKyxycGT/wCJooA6bwRoU3wr8P8A9qeLNfjisGcC50s2on8mXJ8sh1Zscc8AdayviDoek6zsi8P65JbnWUGqw2RsXxdyy7vma4YgRqwA+RuBjOOav6T4y0nxb4fvdX1Dwit3Z7lfXI7WBpJGmAPlOi7uUVAdxJGKs2/iy28Wwx2XhO126XJbrposNdHkWL7edsbISWmwV+XP3RmgDpH8YeENK8LWkrARzz28kCGGwdn3ouxs7VyOTwTwe2a8i8O6g3ijT9L8Paur6J4f0K2/tC8k8klrtom5wwCsrFGIGCx4yAa9W0zXNBuNX1PUyb/w3c6TBHHqqXUawJc70ZIc7zkhdp2dM7h1zXlupXGueNPDc+nXfiKxg0qS9W6sbjxJdC1uZYwhUFQBtZMk8juKAItR+LniGbTl07RrUT29pdSLb3ktqs2+3HEa7WQ4IUDLE5Oea9nn1WDS/GqW19HaaXZLaySQxrbpIdQUIC7blGY9hJG05354rC8DaBren65phs4b208MpZQsBaz27W91MUO+VhvLlG+VgQM9MgVU8R+BvGOs+KtJ1m7gtL51il86Hzx5Fk2VCmDOGLkDcN3G7qQKANDw34pv9S0LXdU0jw/aaxGmtTWkUbNHY7LQIjLuLLzyehGefauH8LzeKvEl5qN7Ya3b2cc5dNVhfT42hs1j3CELuIWQsQRlBkHBPatPV9NuNE0S80jUH8Sx6bq2pN5xSGKS/u7uSMEqFUmNoSgBypLbwR2rmr9vEv8Aal98NLS3sLSG9hhmghLuqW4jXzy3TIdtvzDBGelAGz8LPE0CaZqV1r0c11rej6XcGzgmVk8y0Ub3UtjBy3GTk8+ld5aNEmn2uo2GgZxAmsWcb60I/MuJwN8WG6KqngkbfQCuSsbifVbTRdV16S7kgv8Awtd2Ut0qZeaaSQhYkJ4aVgDtTqSKv2/h/wAMaxeWNt4rtY7O40OyhmMk+I0ksiNkKXBYjbIOrKMAHoTQB5o/w7+IbyM+9RuJOP7Yi4/8iUV6X5HgPPHwo8RsOxXR3IP0+aigDOuorfVfDy6t4UvbfQRq0MmqT6XJET5otsrtXZhQhAO5T13Vxmu2fi/U/B9r4hOgzaaIGF4lzp0iW9qICnyuIlbIk+b7/XGB2qfXfCWhyeE9FtvCtj9tu7uzuL59VuJXhcxQud48okr04/D3rT0DUdU8YeA7iDTdD0pJodLXR5r6fVfLdYY9p3GM8AZPX1OM0Aayah4Y17wtqmnrqLf2FYwQPq2oXG6S4vJZMtCokxuASRSvIPBwMVmLoC3mheDtVu7bzIodFMOnB8FJtR80tBCynqG5yDgepFc1b6RfeDJ20Kaxl1o3W061pUSkQAD5rdvPTJ/iLcY6YORXo2laHpl/p9v4et1tPDF5HqMWpW09hdfb4WkQbVBdztD5PCdwM4oA799Vm0jwZ4f+07dMeeK3gnlEIaO0YoMggcKMjaD0BIrQ0fWj5j2moXKNJ9paC2mKbPtG0An2yM498cVk+JZJtPsfD1hqd4U0t2EWp3RjUq+2PhXGCFV2GD27d6xdNuC9/Do9jLd6h4aS9ia2vljMn2d1O7ydx5ZOB84zjoa3jFOGv9f12OWpKSndf1/Xc5PxPcajefGq4g03T9U1S80m+t7826XgWBbcW8QIVGOA29id3+1WLrnxDuPF3j3RpfDXh37Lrlm1zHP5uxmlUx7WBIxnaivjJ+ldNrWs383xt1DSdO0mxu/sXkXiQXN99nEl15cYEwbGS2wqmz7uFzjOakttT1i88bXnirxFG0Np4bjU21lp0Yuo5GnRo3xIoBYghSeuOelYHUQ+HfFF9LpOqaL4U8NnxBpelzbNIvCY8QsE3IzCTBYhiTkAcVjJoNpq2geIvGviGTV/LgU2t9p8d6Q7XCOPMGeR5e5vlTnGKXTtc12Rb7XJvB9vd2d8/wDwkcTG9dFg8gbeqjlhtJCnr6Vg+HLa/wDiFoni5bmFI7bzHv7Dz38uGC4klG/95wD8vGGyPagBq/EDwyFAC+MwAOB/bp/worgv+Ea14cf2LqJxxkWrkfyooA+iLfwxYywahour/bdP1hImaCLSSsUbwhSZI7IMCRG2QHB6ufSuX1max0Twdq2n6d4UawDaSLeRZ7ZV1HAI/wBImKnaYTgDIGd4PGK0fFXh/wAYeD7fw/c+Hb2G/udFsblLq8meJTtZ9/3JGJPHpnpWb4X1HxtHpGoSeXbX+sa3Eb6G2nWFRHDLtKz+Y52lSQV8ngjrigDTt76fxD4I8Q+IPClhrdtqF5HYQtJMFEUiwtsby9hzgKG35PQ1i6XY2XiAz6bpWt6RplnZagmram9rI0ZQxDDSWZAIWIKeC4zuHXFdR8PcrrWrWWqQLpC6DEklpai7WZUa4RzMzFTiQEgMFOducCsG4vtRu9BRNU8OQ+INJ1C+SGw1LT54tNModSAroo3KpO7O/A6Z7UAdzqvxFOk6gPD2nabHrkiafBPbma+xNfhh/CoiYM2BuJyO5qTw98UF1q3ubiHQxYWKW0txZi5udkt2I1JfZGEIwGBBO7jg47Vwnw38N6PrnxCTWNOuZdNudEcxz6PMz3RUANHkTkhcZJ4AOMe9VtXtLi9tIz44vPsT6bKI7qe1g8tdPWRt3k7Yv9d5q4O5eE780AdH4rvdD1WDwz4otbnw7ofiSUwaq39pOcyR7CqqzKAzDIA7fdq54e8Ianpms6kNC8VpcmFYriLS57lmtgZwTKZY1UfKQWMeD1Azmud8OaHap8QNO0fT4U8QeHZIk1q0Z2ETWKM5jXcXy0iqo+5xy2cVz3ia9EnibUNK8S291o+uyMA2s29yzRxxDmFTBFwcrhM543ZPSgD17Udct7LVW8K6Xb6PHoxs5LPE0Z8lL1+IrdwpxhgxJXGSM4rn9C8Nx6h8O/E3gm01jRJNYmupZZIrJ28m2y6/LjG5QCpGMHtXBaXpX/CO6Pep4quJr3S1fzrmCMskiamF/cxCVSxbK5+dflGeeRXU/Dnxhpmhx3Wj6Npk2oX94Td2yuHiZ5HOTbNI6/wAH94xw3agDRX4i+IIUWL/AISv4d/INvL3Pb8aKw28R2247vHGno2eV/4Q9jj2zt5ooAr31t4R8X6AkzaD4xvr6dg765FpO+SfBI6g7DwAvA/hqbW9J0/xposXh6LUNb0h9B0mOSG21q2S0gYJ+7ErseRnOM9OKyG0nxxqXw28Ft4SOp+UltcCf7HcmIbvPbGfmGe9dvpOm6rceLY9OuxC2qt4Kto5hqKeehl847vMGfm5znmgDh/h94f8Hf2hqi6xp15caNOkaWmsX0Pl20UihxLmXIQAvtC8nJxW14Tj8P8Ah3QNY0yXW5W0OTxHFZm6haNo7mN4uVkbOBGRncwPAFGrXGs+H/Bmr39vHpeuafqjxQRR2trssbF45NjfuXPDOzdVH3lya4jRoLrRNe8O+DL57S4hudatbq/s2iy8EocJ5Tk/KRtPIGRzQB0OiWV/pfj220HQbqGw0/VL6cprOkv5wkiwzJDvIKZQAZA5GateL45rm48O6Vr/AIk8SvpOtF90F5axxzxyo4RMpgYBJz9MGuW8e3mhacwbwtf6nY6hbardLLZ/aiFgwcb4woAQNyOOcDFdDY2WgeKdS0LWo9W1drWAOsz6neNObS7LAW6njo5XOB27igDpfAGm+D/AXiTUp7PVtQubmKd9Lu450jAtwpVmnfBysWQBvPGTithpvDMmn+J/EXiG707Vo71rWG9stMuFuEjRJNkJ4IOSSCcnscVx/h2CW51PxpY61rGiQR/bbltZZbRxctBlA7Ryc7U3Ywpzg5Ncz4Y0vwJaan4hsNY8WTnTCIXtWs5XiS4wWbaw2/MVO3qODyKAO6bw9Jqmr6jpiaprNrpeka5Bb6dZabbrKls20MshyMqqkkkngZpuheKNaij8Q2V9e+M9RmS8msobqw01ZkhEcmAwYDG8gYIPrXFarqFjc6X5vgXUfEzarNC2oaiW1Nj5MaZD+ZjG5sbTnJ4rX+H8vjQ6dqGs+DI7h7b7OvnRalJ54ubvI80xjcApOQcnnHegD1lbz4nbFxpPhsjHBe7lB/H5etFcP/ZGssMvofxC3Hk7deQDPtzRQB89LNKihVkdVHQBjXceAZHOjeNnLsWGhvhief8AWJRRQBw3mPs2b225zjPFfR37OaLJ4X1eR1DOL4fMwyfuL3oooAr/ABLijGp+PD5a5Gi2Z6d/PqP4zosfjTwKsahVaYEhRgH95HRRQA+FV/tsHaPm+Icqtx1Hkjg+1cL4ujQeEvCpCKCdX1EHjr+/SiigD1T9oCOOL4cxmNFQm/jBKjGRtfivGfA7uvg3xyFZhjToyMHp++WiigD66tv+PWH/AHF/lRRRQB//2Q=="
                style="border-width: 0px; width: 80px"
                width="80"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
    <div>
      <span class="footer-title">Social</span>
      <div class="grid grid-flow-col gap-4">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFeederIndustrial&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="130"
          style="border: none; overflow: hidden; width: 100%"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
