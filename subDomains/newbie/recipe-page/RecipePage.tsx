import { Link } from "react-router-dom";
import { usePageTheme } from "../../../src/hooks/usePageTheme";

export default function ReciptePage() {
  usePageTheme("recipe-page");

  return (
    <>
      <Link to={"/"}>
        <span className="text-blue-700 text-lg select-none">Get back</span>
      </Link>
      <div className="w-[550px] h-auto flex flex-col justify-start items-start bg-(--card-bg) rounded-xl p-6 space-y-5 select-none">
        <img
          src="subDomains\newbie\recipe-page\assets\images\image-omelette.jpeg"
          alt=""
        />

        <span className="font-bold text-(--text-primary) text-3xl">
          Simple Omelette Recipe
        </span>

        <span className="text-xs font-semibold">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </span>

        <div className="w-full h-auto bg-[#ee82b228] px-5 py-3 rounded-lg">
          <span className="text-(--text-accent) font-bold text-2xl">
            Preparation time
          </span>

          <div className="pl-5 space-y-2">
            <li>
              <span className="font-bold">Total:</span> Approximately 10 minutes
            </li>
            <li>
              <span className="font-bold">Preparation:</span> 5 minutes
            </li>
            <li>
              <span className="font-bold">Cooking:</span> 5 minutes
            </li>
          </div>
        </div>

        <span className="text-2xl font-bold text-(--text-titles)">
          Ingredients
        </span>
        <div className="">
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>

        <hr className="w-full border-t border-gray-300 my-6"></hr>

        <span className="text-2xl font-bold text-(--text-titles)">
          Instructions
        </span>

        <div>
          <ol>
            <li>
              <span className="font-bold">Beat the eggs: </span>In a bowl, beat
              the eggs with a pinch of salt and pepper until they are well
              mixed. You can add a tablespoon of water or milk for a fluffier
              texture.
            </li>
            <li>
              <span className="font-bold">Heat the pan: </span>Place a non-stick
              frying pan over medium heat and add butter or oil.
            </li>
            <li>
              <span className="font-bold">Cook the omelette: </span>Once the
              butter is melted and bubbling, pour in the eggs. Tilt the pan to
              ensure the eggs evenly coat the surface.
            </li>
            <li>
              <span className="font-bold">Add fillings (optional): </span>When
              the eggs begin to set at the edges but are still slightly runny in
              the middle, sprinkle your chosen fillings over one half of the
              omelette.
            </li>
            <li>
              <span className="font-bold">Fold and serve: </span>As the omelette
              continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a
              plate.
            </li>
            <li>
              <span className="font-bold">Enjoy: </span>Serve hot, with
              additional salt and pepper if needed.
            </li>
          </ol>
        </div>

        <hr className="w-full border-t border-gray-300 my-6"></hr>

        <span className="text-2xl font-bold text-(--text-titles)">
          Nutrition
        </span>
        <span>
          The table below shows nutritional values per serving without the
          additional fillings.
        </span>

        <div className="w-full divide-y divide-gray-200/60">
          <div className="grid grid-cols-2 gap-x-8 py-3">
            <span className="text-gray-600">Calories</span>
            <span className="font-bold text-(--text-titles) ">277 kcal</span>
          </div>

          <div className="grid grid-cols-2 gap-x-8 py-3">
            <span className="text-gray-600">Carbs</span>
            <span className="font-bold text-(--text-titles) ">0 g</span>
          </div>

          <div className="grid grid-cols-2 gap-x-8 py-3">
            <span className="text-gray-600">Protein</span>
            <span className="font-bold text-(--text-titles) ">20 g</span>
          </div>

          <div className="grid grid-cols-2 gap-x-8 py-3">
            <span className="text-gray-600">Fat</span>
            <span className="font-bold text-(--text-titles) ">22 g</span>
          </div>
        </div>
      </div>
    </>
  );
}
