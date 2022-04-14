import { React } from "react";
import ArrowButton from "./ArrowButton";
import { useNavigate } from "react-router-dom";

function ActionCard(props) {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/action");
  };
  return (
    <div>
      <div class="p-6 h-64 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-5 flex flex-col">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </a>
        <p className="overflow-ellipsis overflow-hidden">
          {/* {props.description} */}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ex
          eveniet nihil debitis nostrum minima velit quasi voluptate corrupti
          hic suscipit, soluta atque quisquam voluptatum aut, repudiandae earum
          inventore tempore similique dolores ratione qui quam voluptates? Eius
          ipsum recusandae at, voluptatem minus porro assumenda officiis et
          dolores accusamus debitis deserunt possimus laudantium eum culpa totam
          quia? Accusamus voluptates debitis nihil, porro quasi aperiam, fugiat
          odit cupiditate eos inventore obcaecati incidunt impedit molestiae, ea
          nisi id repellat ratione. Magnam saepe nisi sed, laborum quo deleniti.
          Illo maxime sequi laudantium aliquam quo, ab est fugiat ad dolorem
          laboriosam voluptas excepturi nemo consequatur nisi minima rem.
          Repudiandae autem corrupti rem harum, explicabo cum unde aperiam,
          excepturi nam ut suscipit voluptates sunt cumque, voluptatem totam
          aut. Laudantium autem corporis quam ducimus voluptates facilis nam.
          Perspiciatis minus assumenda aliquid magnam autem in, aperiam iure
          vero laudantium nihil quis eius vel reiciendis dolorum eveniet eum
          ipsum veritatis perferendis suscipit nam soluta quidem possimus
          ratione. Rerum dolores, laboriosam accusantium, quae beatae
          perspiciatis autem assumenda expedita harum commodi, cumque ducimus
          quaerat odio. Modi natus nostrum voluptatibus nisi, voluptatem
          consectetur adipisci eaque repellendus, voluptas, tempore dolor iusto.
          Sunt ducimus sed qui autem in pariatur voluptatibus quisquam repellat
          dolorem sapiente accusantium obcaecati quibusdam numquam praesentium,
          amet odio ipsa, eligendi magni assumenda, porro vero reiciendis quod
          quo. Quibusdam veritatis laborum necessitatibus facilis pariatur ad
          voluptatibus, fugit dicta quo ipsam, sapiente voluptatem nostrum quos
          laboriosam delectus aspernatur enim repellendus voluptas blanditiis
          eius obcaecati totam maxime ratione. Perspiciatis cum expedita unde,
          vel suscipit esse dolore soluta ratione laudantium ipsam id minus
          iusto, odit maxime consectetur debitis. Magni maxime modi, ut aut hic
          laborum explicabo iure quia dolore ducimus, natus voluptatibus rem
          quam! Quia aperiam nam nostrum labore quam excepturi ea unde
          voluptatibus. Dolor labore assumenda, obcaecati voluptatibus,
          blanditiis optio architecto dolorum illo officia fuga ducimus non
          veniam! Esse vel accusantium fugiat reprehenderit dolor dolorem
          tempora iste dolores repellat aspernatur adipisci magni libero
          praesentium totam cupiditate odio perspiciatis soluta, sint in
          provident ex quod pariatur commodi incidunt! Ipsum culpa eaque nihil
          deserunt qui, facere corporis tenetur quos accusamus sapiente ut
          numquam dolorum exercitationem illum atque odit provident?
          Necessitatibus velit reprehenderit, est corporis illum voluptates,
          ullam deleniti quasi dolores quisquam voluptatem quos aliquam numquam
          alias iure, assumenda quidem. Voluptatem nostrum incidunt nemo, cumque
          molestiae eius repellat, omnis, labore eum laudantium repudiandae
          recusandae asperiores alias quis deleniti minus. Accusamus, aperiam
          mollitia nobis, voluptas harum cumque totam rem voluptate dolorum
          ratione est animi, excepturi dicta repellendus reprehenderit eveniet?
          Corporis tempore dolore dicta et! Eveniet odit asperiores, recusandae
          dicta consectetur, aspernatur autem sed placeat error reiciendis,
          quibusdam vero ullam consequatur labore omnis atque exercitationem?
          Saepe repudiandae repellendus itaque deserunt libero voluptatem
          obcaecati id cumque dolore laboriosam optio, unde quis, exercitationem
          pariatur, odio porro nam est ipsa aut atque fuga dolor sit? Mollitia,
          blanditiis ipsum! Ab fuga iure quod autem sint laboriosam sequi, quas
          sunt! Asperiores iusto officia ipsa! Vero eveniet adipisci praesentium
          ea eligendi tempore ut ab voluptatibus hic aspernatur impedit ex rem
          corrupti ipsam neque, magni illum, deserunt asperiores at consequatur.
          Iusto, autem, dolor at numquam odio quod voluptatem necessitatibus
          tenetur eligendi rerum, accusamus iure optio. Placeat enim, non
          aliquam numquam nisi, nulla, officia facere voluptatem quis tempore
          veniam in atque nostrum provident porro minus est possimus vel
          accusantium. Quia, odit! Reiciendis, veritatis quod illum laborum
          facere necessitatibus ea sunt ipsum temporibus iure provident. Quidem,
          et? Deserunt sed officia impedit, non perspiciatis ratione nam itaque
          nihil atque cum voluptatibus sapiente odit aliquid nemo, dolorem
          consectetur facere nulla molestiae? Voluptas officiis libero
          perferendis officia commodi in ea voluptates eos quis rem dolore quos
          blanditiis, nisi ipsum animi esse cupiditate dicta error autem. Labore
          ratione saepe voluptate debitis praesentium! Saepe sit a voluptatem
          quis maiores quisquam ipsa est atque consequatur id, molestias
          eligendi officiis praesentium aliquam ipsam eveniet accusamus.
          Doloribus aut excepturi culpa reiciendis repellat deserunt incidunt ab
          autem.
        </p>
        {/* <a
        href="#"
        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Voir plus
        <svg
          class="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a> */}
        <div className="sm:w-1/2 ">
          <ArrowButton onClick={handleClick}>Voir plus</ArrowButton>
        </div>
      </div>
    </div>
  );
}

export default ActionCard;
