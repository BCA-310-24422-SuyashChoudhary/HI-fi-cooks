const image = (id, width = 700) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const fallbackFoodImage = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420"><rect width="640" height="420" fill="#e9eee3"/><circle cx="320" cy="215" r="115" fill="#fffefa"/><circle cx="320" cy="215" r="86" fill="#f5f2ea"/><text x="320" y="245" text-anchor="middle" font-size="80">🥗</text></svg>')}`;

const recipes = [
  {
    id: 1, name: "Golden butter chicken", subtitle: "Creamy, cozy & full of warming spices", category: "Indian", cuisine: "North Indian", time: 45, difficulty: "Easy", rating: "4.9", serves: 4, calories: 486, temperature: "Medium heat",
    image: image("photo-1603894584373-5ac82b2ae398"), ingredients: [["Chicken thighs, boneless", "600 g"], ["Greek yogurt", "120 g"], ["Tomato passata", "400 g"], ["Heavy cream", "120 ml"], ["Unsalted butter", "40 g"], ["Garam masala", "2 tsp"], ["Ginger, finely grated", "1 tbsp"], ["Garlic, minced", "3 cloves"], ["Fine sea salt", "1 tsp"], ["Fresh cilantro", "To garnish"]],
    steps: ["In a bowl, combine chicken with yogurt, half the garam masala, and ½ tsp salt. Cover and marinate in the refrigerator for at least 20 minutes.", "Warm a large skillet over medium-high heat. Add a little oil and cook chicken in a single layer for 4–5 minutes per side, until golden and 74°C / 165°F at the thickest point. Transfer to a plate.", "Lower heat to medium. Melt butter, then cook ginger and garlic for 30 seconds until fragrant. Stir in tomato passata and remaining garam masala; simmer gently for 10 minutes.", "Stir in cream and chicken, including any resting juices. Simmer gently for 5 minutes. Season to taste and finish with cilantro. Do not boil after adding cream."],
    safety: "Cook chicken to an internal temperature of 74°C / 165°F. Use a clean plate and utensils after handling raw poultry."
  },
  {
    id: 2, name: "Silky sesame noodles", subtitle: "A 20-minute pantry weeknight favorite", category: "Chinese", cuisine: "Chinese", time: 20, difficulty: "Easy", rating: "4.8", serves: 2, calories: 420, temperature: "Medium heat",
    image: image("photo-1569718212165-3a8278d5f624"), ingredients: [["Wheat noodles", "200 g"], ["Tahini or sesame paste", "2 tbsp"], ["Light soy sauce", "2 tbsp"], ["Rice vinegar", "1 tbsp"], ["Honey", "1 tsp"], ["Garlic, finely grated", "1 clove"], ["Chili crisp", "1 tsp"], ["Spring onions, sliced", "2"]],
    steps: ["Bring a pot of salted water to a boil. Cook noodles following the package timing until just tender. Reserve 60 ml (¼ cup) cooking water, then drain.", "Whisk tahini, soy sauce, rice vinegar, honey, garlic, and chili crisp in a bowl until smooth.", "Whisk in warm noodle water, one tablespoon at a time, until the sauce is silky and pourable.", "Toss noodles with the sauce. Divide between bowls and finish with spring onions and extra sesame seeds."],
    safety: "Check the noodle package for allergen information; soy, wheat, and sesame are common allergens."
  },
  {
    id: 3, name: "Sunday tomato pappardelle", subtitle: "Slow-simmered comfort with fresh basil", category: "Italian", cuisine: "Italian", time: 40, difficulty: "Easy", rating: "4.9", serves: 3, calories: 518, temperature: "Low simmer",
    image: image("photo-1473093295043-cdd812d0e601"), ingredients: [["Pappardelle", "250 g"], ["Ripe tomatoes, chopped", "500 g"], ["Extra-virgin olive oil", "2 tbsp"], ["Garlic, thinly sliced", "3 cloves"], ["Parmesan, finely grated", "40 g"], ["Fresh basil leaves", "1 handful"], ["Fine sea salt", "1 tsp"], ["Black pepper", "To taste"]],
    steps: ["Heat olive oil in a wide saucepan over medium-low heat. Add garlic and cook for 45 seconds without browning.", "Add tomatoes and salt. Bring to a gentle simmer, then cook uncovered for 25 minutes, stirring occasionally, until soft and glossy.", "Cook pappardelle in a large pot of salted boiling water until al dente, following the package timing. Save a mug of pasta water before draining.", "Toss pasta into the sauce with a splash of pasta water. Fold in torn basil, pepper, and half the Parmesan. Serve with remaining cheese."],
    safety: "Refrigerate leftover pasta within 2 hours in a shallow, covered container and use within 3–4 days."
  },
  {
    id: 4, name: "Smoky black bean tacos", subtitle: "Bright lime, creamy avocado, big flavor", category: "Mexican", cuisine: "Mexican", time: 25, difficulty: "Easy", rating: "4.7", serves: 4, calories: 365, temperature: "Medium heat",
    image: image("photo-1551504734-5ee1c4a1479b"), ingredients: [["Black beans, drained", "2 × 400 g cans"], ["Corn tortillas", "8 small"], ["Smoked paprika", "1 tsp"], ["Ground cumin", "1 tsp"], ["Red onion, diced", "½"], ["Avocado, sliced", "1"], ["Lime", "1"], ["Fresh cilantro", "To serve"]],
    steps: ["Rinse and drain black beans. Add to a skillet with cumin, smoked paprika, 2 tbsp water, and a pinch of salt.", "Warm beans over medium heat for 6–8 minutes, gently mashing about a third for a creamy texture.", "Warm tortillas in a dry skillet for about 30 seconds per side. Keep wrapped in a clean towel.", "Fill tortillas with beans, avocado, onion, and cilantro. Finish with a generous squeeze of lime."],
    safety: "If using canned beans, drain and rinse under clean running water before cooking."
  },
  {
    id: 5, name: "Coconut dosa & chutney", subtitle: "Crisp at the edges, soft in the middle", category: "South Indian", cuisine: "South Indian", time: 35, difficulty: "Medium", rating: "4.8", serves: 4, calories: 310, temperature: "Medium-low heat",
    image: image("photo-1630383249896-424e482df921"), ingredients: [["Dosa batter", "500 g"], ["Neutral oil", "2 tsp"], ["Fresh coconut, grated", "100 g"], ["Roasted chana dal", "2 tbsp"], ["Green chili", "1"], ["Fresh ginger", "1 tsp"], ["Lime juice", "1 tbsp"], ["Fine sea salt", "To taste"]],
    steps: ["Blend coconut, roasted chana dal, chili, ginger, lime juice, salt, and 80 ml water until smooth. Adjust to a spoonable consistency.", "Warm a well-seasoned flat skillet over medium heat. Wipe with a few drops of oil.", "Pour about 80 ml batter into the center. In a circular motion, spread it into a thin round.", "Drizzle a little oil around the edge. Cook 2–3 minutes until golden and crisp; fold and serve warm with coconut chutney."],
    safety: "Keep fermented dosa batter refrigerated and use a clean, dry spoon each time you scoop."
  },
  {
    id: 6, name: "Little lemon olive oil cake", subtitle: "Tender crumb with a sunshine-bright finish", category: "Dessert", cuisine: "Dessert", time: 55, difficulty: "Easy", rating: "4.9", serves: 8, calories: 295, temperature: "175°C / 350°F",
    image: image("photo-1519915028121-7d3463d20b13"), ingredients: [["All-purpose flour", "200 g"], ["Granulated sugar", "160 g"], ["Extra-virgin olive oil", "120 ml"], ["Whole milk", "120 ml"], ["Large eggs", "2"], ["Lemon zest", "2 lemons"], ["Baking powder", "1 tsp"], ["Fine sea salt", "¼ tsp"]],
    steps: ["Heat oven to 175°C / 350°F. Lightly oil a 20 cm (8-inch) round cake tin and line the base with parchment.", "Whisk flour, baking powder, and salt in a medium bowl. In another bowl, whisk sugar with lemon zest to release the oils.", "Whisk eggs, olive oil, milk, and lemon juice into the sugar. Fold in dry ingredients just until no flour streaks remain.", "Pour into the tin. Bake 35–40 minutes, until golden and a skewer inserted in the center comes out clean. Cool 15 minutes before turning out."],
    safety: "Oven temperatures vary; begin checking at 35 minutes. Use dry oven mitts and place the hot tin on a heat-safe surface."
  },
  {
    id: 7, name: "Creamy chickpea & spinach curry", subtitle: "A comforting one-pot bowl with coconut", category: "Indian", cuisine: "North Indian", time: 30, difficulty: "Easy", rating: "4.8", serves: 4, calories: 390, temperature: "Gentle simmer",
    image: image("photo-1603894584373-5ac82b2ae398"), ingredients: [["Cooked chickpeas, drained", "2 × 400 g cans"], ["Baby spinach", "150 g"], ["Coconut milk", "400 ml"], ["Yellow onion, diced", "1 medium"], ["Curry powder", "2 tsp"], ["Garlic, minced", "2 cloves"], ["Vegetable stock", "120 ml"], ["Lime", "½"]],
    steps: ["Warm a little oil in a saucepan over medium heat. Cook onion for 5 minutes until soft, then stir in garlic and curry powder for 30 seconds.", "Add drained chickpeas, coconut milk, and stock. Bring to a gentle simmer and cook for 15 minutes, stirring occasionally.", "Fold in spinach in handfuls and cook for 2 minutes until just wilted.", "Season to taste and finish with lime juice. Serve with warm rice or flatbread."],
    safety: "Rinse canned chickpeas well. Cool leftovers promptly and refrigerate within 2 hours."
  },
  {
    id: 8, name: "Pillowy ricotta pancakes", subtitle: "A slow-morning stack with honey & berries", category: "Continental", cuisine: "Continental", time: 25, difficulty: "Easy", rating: "4.7", serves: 3, calories: 340, temperature: "Medium-low heat",
    image: image("photo-1528207776546-365bb710ee93"), ingredients: [["Ricotta", "180 g"], ["All-purpose flour", "120 g"], ["Whole milk", "120 ml"], ["Large eggs, separated", "2"], ["Baking powder", "1 tsp"], ["Honey", "2 tbsp"], ["Fresh berries", "150 g"], ["Fine sea salt", "¼ tsp"]],
    steps: ["Whisk ricotta, milk, and egg yolks until smooth. Fold in flour, baking powder, and salt just until combined.", "In a clean bowl, whisk egg whites to soft peaks. Gently fold into the batter in two additions.", "Heat a lightly buttered skillet over medium-low heat. Spoon ¼ cup batter per pancake and cook until bubbles form, about 2 minutes.", "Flip and cook 1–2 minutes more until cooked through. Serve with berries and honey."],
    safety: "Cook pancakes until the center is set; avoid tasting uncooked batter containing raw eggs."
  },
  {
    id: 9, name: "Ginger-lime iced tea", subtitle: "A refreshing, not-too-sweet afternoon sip", category: "Beverage", cuisine: "Beverage", time: 15, difficulty: "Easy", rating: "4.6", serves: 4, calories: 52, temperature: "Chilled", image: image("photo-1556679343-c7306c1976bc"),
    ingredients: [["Black tea bags", "4"], ["Fresh ginger, sliced", "20 g"], ["Boiling water", "750 ml"], ["Honey", "2 tbsp"], ["Lime juice", "2 tbsp"], ["Ice", "To serve"], ["Fresh mint", "To serve"]],
    steps: ["Add tea bags and ginger to a heat-safe jug. Pour over boiling water and steep for 4 minutes.", "Remove the tea bags. Stir in honey while warm, then cool to room temperature.", "Stir in lime juice and chill for at least 1 hour.", "Pour over ice and garnish with fresh mint and lime."],
    safety: "Refrigerate brewed tea promptly and use within 3 days."
  },
  {
    id: 10, name: "Crispy masala chickpeas", subtitle: "A crunchy, warmly spiced snack from the oven", category: "Snacks", cuisine: "Snacks", time: 40, difficulty: "Easy", rating: "4.7", serves: 4, calories: 185, temperature: "200°C / 400°F", image: image("photo-1512621776951-a57141f2eefd"),
    ingredients: [["Cooked chickpeas, drained", "2 × 400 g cans"], ["Neutral oil", "1 tbsp"], ["Ground cumin", "1 tsp"], ["Smoked paprika", "½ tsp"], ["Fine sea salt", "½ tsp"], ["Ground coriander", "½ tsp"]],
    steps: ["Heat oven to 200°C / 400°F. Drain and rinse chickpeas; pat very dry with a clean towel. Remove any loose skins.", "Toss chickpeas with oil and spread in a single layer on a rimmed baking sheet.", "Roast for 25 minutes, shaking the pan once. Mix the spices and salt, toss with the hot chickpeas, then roast 5–10 minutes more until crisp.", "Cool briefly before serving. They crisp further as they cool; store leftovers in a clean, dry, airtight container."],
    safety: "Use dry chickpeas and a rimmed, heat-safe baking sheet. Let the hot tray cool on a heat-safe surface."
  }
];

const storageWarnings = [];
let activeCategory = "All";
let currentView = "discover";
let searchTerm = "";
let ingredientMode = false;
let ingredientTerms = [];
let visibleRecipe = null;
let servings = 0;
let toastTimer;
let lastModalTrigger = null;
function readStoredArray(key, isValidItem) {
  try {
    const stored = localStorage.getItem(key);
    if (stored === null) return [];
    const value = JSON.parse(stored);
    if (!Array.isArray(value)) throw new Error("Stored value is not a list.");
    const valid = value.filter(isValidItem);
    if (valid.length !== value.length) storageWarnings.push(`Some invalid saved ${key.replace("hifi", "").toLowerCase()} data was ignored.`);
    return valid;
  } catch (error) {
    console.error(`Could not read ${key} from browser storage.`, error);
    storageWarnings.push("Some saved browser data could not be read. Clear this site's data or continue with a fresh session.");
    return [];
  }
}

function writeStoredArray(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Could not save ${key} to browser storage.`, error);
    showToast("Could not save on this device. Check browser storage settings and available space.");
    return false;
  }
}

function isStoredRecipe(value) {
  return value && Number.isSafeInteger(value.id) && value.id > 1e12
    && typeof value.name === "string" && value.name.length > 0 && value.name.length <= 70
    && typeof value.subtitle === "string" && typeof value.category === "string"
    && typeof value.cuisine === "string" && Number.isFinite(value.time) && value.time > 0
    && Number.isFinite(value.serves) && value.serves > 0
    && Number.isFinite(value.calories) && value.calories >= 0
    && typeof value.temperature === "string" && typeof value.safety === "string"
    && Array.isArray(value.ingredients) && value.ingredients.length > 0
    && value.ingredients.every(item => Array.isArray(item) && item.length === 2 && item.every(part => typeof part === "string"))
    && Array.isArray(value.steps) && value.steps.length > 0 && value.steps.every(step => typeof step === "string");
}

const saved = new Set(readStoredArray("hifiSaved", value => Number.isSafeInteger(value) && value > 0));
const cooked = new Set(readStoredArray("hifiCooked", value => Number.isSafeInteger(value) && value > 0));
recipes.unshift(...readStoredArray("hifiCustomRecipes", isStoredRecipe));

const recipeGrid = document.getElementById("recipeGrid");
const assistantRail = document.querySelector(".assistant-rail");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function updateSavedCount() {
  document.getElementById("savedCount").textContent = saved.size;
}

function filteredRecipes() {
  let result = recipes.filter(recipe => {
    const categoryMatch = activeCategory === "All" || recipe.category === activeCategory || recipe.cuisine === activeCategory;
    const savedMatch = currentView !== "favorites" || saved.has(recipe.id);
    const historyMatch = currentView !== "history" || cooked.has(recipe.id);
    const searchable = `${recipe.name} ${recipe.subtitle} ${recipe.category} ${recipe.cuisine} ${recipe.ingredients.map(item => item[0]).join(" ")}`.toLowerCase();
    const words = searchTerm.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const searchMatch = words.length === 0 || words.every(word => searchable.includes(word));
    const ingredientMatch = !ingredientMode || ingredientTerms.some(word => searchable.includes(word));
    return categoryMatch && savedMatch && historyMatch && searchMatch && ingredientMatch;
  });
  const sort = document.getElementById("sortRecipes").value;
  if (sort === "quickest") result = [...result].sort((a, b) => a.time - b.time);
  if (sort === "easy") result = [...result].sort((a, b) => (a.difficulty === "Easy" ? 0 : 1) - (b.difficulty === "Easy" ? 0 : 1));
  return result;
}

function renderRecipes() {
  const filtered = filteredRecipes();
  recipeGrid.innerHTML = filtered.map(recipe => `
    <article class="recipe-card" data-open-recipe="${recipe.id}" tabindex="0" role="group" aria-labelledby="recipe-title-${recipe.id}">
      <div class="recipe-image-wrap">
      <img class="recipe-image" src="${escapeHtml(recipe.image)}" alt="${escapeHtml(recipe.name)}" loading="lazy">
      <span class="recipe-tag">${recipe.time < 30 ? "QUICK & EASY" : escapeHtml(recipe.difficulty.toUpperCase())}</span>
        <button class="favorite-button ${saved.has(recipe.id) ? "saved" : ""}" data-favorite="${recipe.id}" aria-pressed="${saved.has(recipe.id)}" aria-label="${saved.has(recipe.id) ? "Remove from" : "Save to"} favorites">${saved.has(recipe.id) ? "♥" : "♡"}</button>
      </div>
      <div class="recipe-card-body">
        <span class="card-category">${escapeHtml(recipe.cuisine)}</span>
        <h3 id="recipe-title-${recipe.id}"><button class="recipe-title-button" type="button" data-open-detail="${recipe.id}">${escapeHtml(recipe.name)}</button></h3>
        <p class="recipe-subtitle">${escapeHtml(recipe.subtitle)}</p>
        <div class="card-meta"><span>◷ ${recipe.time} min</span><span>${escapeHtml(recipe.difficulty)}</span><span class="rating">Recipe guide</span></div>
      </div>
    </article>`).join("");
  document.getElementById("recipeCount").textContent = `${filtered.length} recipes`;
  document.getElementById("emptyState").classList.toggle("hidden", filtered.length > 0);
  recipeGrid.classList.toggle("hidden", filtered.length === 0);
  document.getElementById("recipeHeading").innerHTML = currentView === "favorites" ? "Your saved recipes <span class=\"heading-spark\">♡</span>" : currentView === "history" ? "Your cooking history <span class=\"heading-spark\">◷</span>" : activeCategory === "All" && !searchTerm && !ingredientMode ? "Recipes to fall for <span class=\"heading-spark\">✳</span>" : `${searchTerm ? "Search results" : activeCategory === "All" ? "Recipes to explore" : `${escapeHtml(activeCategory)} recipes`} <span class="heading-spark">✳</span>`;
  document.getElementById("breadcrumbCurrent").textContent = currentView === "favorites" ? "Saved recipes" : currentView === "history" ? "Cooking history" : activeCategory === "All" ? "Discover" : activeCategory;
}

function setCategory(category) {
  activeCategory = category;
  currentView = "discover";
  ingredientMode = false;
  document.getElementById("discoverView").classList.remove("hidden");
  document.getElementById("chefView").classList.add("hidden");
  document.querySelectorAll(".category-tile").forEach(tile => tile.classList.toggle("selected", tile.dataset.category === category));
  document.querySelectorAll(".side-link[data-view]").forEach(link => link.classList.toggle("active", link.dataset.view === "discover"));
  renderRecipes();
}

function renderChefTable() {
  document.getElementById("totalRecipes").textContent = recipes.length;
  document.getElementById("savedRecipesStat").textContent = saved.size;
  document.getElementById("cookedRecipesStat").textContent = cooked.size;
  const rows = recipes.map(recipe => `<div class="chef-table-row"><div class="chef-table-recipe"><img src="${escapeHtml(recipe.image)}" alt=""><span>${escapeHtml(recipe.name)}</span></div><span>${escapeHtml(recipe.category)}</span><span>${recipe.time} min</span><span class="chef-row-actions"><span class="status-pill">${recipe.id > 1e12 ? "This device" : "Starter recipe"}</span><button class="row-action" data-edit-recipe="${recipe.id}" aria-label="Edit ${escapeHtml(recipe.name)}">Edit</button></span></div>`).join("");
  document.getElementById("chefTable").innerHTML = `<div class="chef-table-row chef-table-head"><span>RECIPE</span><span>CUISINE</span><span>TIME</span><span>STATUS</span></div>${rows}`;
}

function openRecipe(id) {
  const recipe = recipes.find(item => item.id === Number(id));
  if (!recipe) return;
  lastModalTrigger = document.activeElement;
  visibleRecipe = recipe;
  servings = recipe.serves;
  renderRecipeModal();
  document.getElementById("recipeModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  document.querySelector("#recipeModal [data-close-modal]").focus();
}

function renderRecipeModal() {
  const recipe = visibleRecipe;
  const multiplier = servings / recipe.serves;
  const list = recipe.ingredients.map(([name, amount]) => {
    const numeric = amount.match(/^(\d+(?:\.\d+)?)(.*)$/);
    const scaled = numeric ? `${Number(numeric[1]) * multiplier}${numeric[2]}` : amount;
    return `<li><input type="checkbox" aria-label="Mark ${escapeHtml(name)} as ready"><span>${escapeHtml(name)}</span><strong>${escapeHtml(scaled)}</strong></li>`;
  }).join("");
  const steps = recipe.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("");
  document.getElementById("modalContent").innerHTML = `
    <div class="modal-hero"><img src="${escapeHtml(recipe.image)}" alt="${escapeHtml(recipe.name)}"><div class="modal-hero-title"><span>${escapeHtml(recipe.cuisine)} · ${escapeHtml(recipe.difficulty)}</span><h2 id="modalTitle">${escapeHtml(recipe.name)}</h2></div></div>
    <div class="modal-body"><p class="modal-description" id="recipeModalDescription">${escapeHtml(recipe.subtitle)}. Review the ingredients and steps before you begin; cooking times can vary by equipment and ingredients.</p>
      <div class="modal-stats"><span><b>◷</b>${recipe.time} minutes</span><span><b>♨</b>${escapeHtml(recipe.temperature)}</span><span><b>♧</b>${servings} servings</span><span><b>✳</b>${recipe.calories} kcal / serving</span></div>
      <div class="recipe-detail-grid"><section><h3>What you'll need</h3><div class="serving-adjust">Adjust servings <button data-serving="-1" aria-label="Decrease servings">−</button> <strong>${servings}</strong> <button data-serving="1" aria-label="Increase servings">+</button></div><ul class="ingredient-list">${list}</ul></section>
      <section><h3>Let's get cooking</h3><ol class="instruction-list">${steps}</ol><div class="food-safety"><strong>Kitchen safety ·</strong> ${escapeHtml(recipe.safety)} Nutritional values are estimates. Check package labels and use a food thermometer when appropriate.</div><button class="primary-button start-cooking" data-start-cooking="${recipe.id}">I cooked this <span>→</span></button></section></div></div>`;
}

function closeModals() {
  document.querySelectorAll(".modal-backdrop").forEach(modal => modal.classList.add("hidden"));
  document.body.style.overflow = "";
  if (lastModalTrigger instanceof HTMLElement && lastModalTrigger.isConnected) lastModalTrigger.focus();
  lastModalTrigger = null;
}

function showChef() {
  currentView = "chef";
  document.getElementById("discoverView").classList.add("hidden");
  document.getElementById("chefView").classList.remove("hidden");
  document.getElementById("breadcrumbCurrent").textContent = "Local recipe editor";
  document.querySelectorAll(".side-link").forEach(link => link.classList.remove("active"));
  renderChefTable();
  document.querySelector(".sidebar").classList.remove("open");
}

function showDiscover() {
  currentView = "discover";
  activeCategory = "All";
  document.getElementById("discoverView").classList.remove("hidden");
  document.getElementById("chefView").classList.add("hidden");
  document.querySelectorAll(".category-tile").forEach(tile => tile.classList.toggle("selected", tile.dataset.category === "All"));
  document.querySelectorAll(".side-link[data-view]").forEach(link => link.classList.toggle("active", link.dataset.view === "discover"));
  renderRecipes();
}

function assistantReply(text) {
  const lower = text.toLowerCase();
  if (lower.includes("chicken") || lower.includes("safe") || lower.includes("temperature")) return "For food safety, cook chicken until the thickest part reaches 74°C / 165°F on an instant-read thermometer. Insert it into the center without touching bone. Rest for 3 minutes, and use a clean plate for cooked chicken.";
  if (lower.includes("chickpea") || lower.includes("spinach") || lower.includes("fridge") || lower.includes("ingredient")) return "A cozy chickpea and spinach curry could be just the thing! Sauté onion with garlic and curry powder, add rinsed chickpeas and coconut milk, and simmer for 15 minutes. Fold in spinach to wilt, then finish with lime. Search “chickpea” to find our measured recipe.";
  if (lower.includes("cream") || lower.includes("substitute") || lower.includes("swap")) return "It depends on the recipe: full-fat coconut milk works beautifully in curries and many desserts; evaporated milk is a good option in soups and sauces. For whipping, chilled coconut cream is the closest dairy-free swap. What are you making?";
  if (lower.includes("salt")) return "A little at a time is the safest way to season. Add a pinch, stir, and taste before adding more. If a dish gets too salty, try balancing it with unsalted liquid, a squeeze of citrus, or more of the unsalted ingredients.";
  if (lower.includes("dosa") || lower.includes("batter")) return "For crisp dosas, let the batter come to room temperature, heat a well-seasoned pan over medium heat, then spread a thin layer in a spiral. If the batter resists spreading, the pan may be too hot—cool it briefly and try again.";
  if (lower.includes("hello") || lower.includes("hi")) return "Hi there! I'm right here with recipe ideas, ingredient swaps, food safety tips, and cooking help. What's on your mind?";
  return "Happy to help! Tell me what you're cooking and where you're stuck. I can help with ingredient swaps, timing, technique, and food-safe temperatures. For safety-critical questions, use a food thermometer and follow local food-safety guidance.";
}

function sendChat(text) {
  const message = text.trim();
  if (!message) return;
  const messages = document.getElementById("chatMessages");
  messages.insertAdjacentHTML("beforeend", `<div class="chat-message user"></div>`);
  messages.lastElementChild.textContent = message;
  document.getElementById("chatInput").value = "";
  setTimeout(() => {
    const reply = assistantReply(message);
    messages.insertAdjacentHTML("beforeend", `<div class="chat-message assistant"></div>`);
    messages.lastElementChild.textContent = reply;
    messages.scrollTop = messages.scrollHeight;
  }, 350);
  messages.scrollTop = messages.scrollHeight;
}

function showRecipeForm(recipe = null) {
  lastModalTrigger = document.activeElement;
  const categories = ["Indian", "North Indian", "Chinese", "Italian", "Mexican", "South Indian", "Continental", "Dessert", "Beverage", "Snacks"];
  const categoryOptions = categories.map(category => `<option ${recipe?.category === category ? "selected" : ""}>${category}</option>`).join("");
  const difficultyOptions = ["Easy", "Medium", "Advanced"].map(level => `<option ${recipe?.difficulty === level ? "selected" : ""}>${level}</option>`).join("");
  const ingredientLines = recipe ? recipe.ingredients.map(([name, amount]) => `${name}: ${amount}`).join("\n") : "";
  document.getElementById("formContent").innerHTML = `<h2 id="formTitle">${recipe ? "Edit recipe" : "Create a recipe"}</h2><p class="form-intro">Share something delicious with the Hi-Fi Cooks community.</p>
    <form class="recipe-form" id="recipeForm" data-recipe-id="${recipe ? recipe.id : ""}">
      <p class="form-intro" id="formIntro">Recipes are saved only in this browser. They are not uploaded or shared with other visitors.</p>
      <label>Recipe name<input name="name" required maxlength="70" placeholder="e.g. Sunday tomato soup" value="${escapeHtml(recipe?.name || "")}"></label>
      <div class="form-row"><label>Cuisine<select name="category">${categoryOptions}</select></label><label>Cooking time (min)<input name="time" type="number" min="1" max="600" value="${recipe?.time || 30}" required></label></div>
      <div class="form-row"><label>Servings<input name="serves" type="number" min="1" max="30" value="${recipe?.serves || 4}" required></label><label>Difficulty<select name="difficulty">${difficultyOptions}</select></label></div>
      <label>Cooking temperature or heat<input name="temperature" required maxlength="60" placeholder="e.g. 180°C / 350°F or medium heat" value="${escapeHtml(recipe?.temperature || "")}"></label>
      <label>Calories per serving<input name="calories" type="number" min="0" max="10000" value="${recipe?.calories || ""}" required></label>
      <label>Short description<input name="subtitle" required maxlength="100" placeholder="A little about this dish" value="${escapeHtml(recipe?.subtitle || "")}"></label>
      <label>Ingredients, one per line (name: quantity)<textarea name="ingredients" required placeholder="Flour: 2 cups&#10;Fine sea salt: 1 tsp">${escapeHtml(ingredientLines)}</textarea></label>
      <label>Cooking steps, one per line<textarea name="steps" required placeholder="Preheat the oven...">${escapeHtml(recipe?.steps.join("\n") || "")}</textarea></label>
      <label>Food safety guidance<textarea name="safety" required placeholder="Include safe cooking temperatures and handling guidance.">${escapeHtml(recipe?.safety || "")}</textarea></label>
      <button class="primary-button" type="submit">${recipe ? "Save changes" : "Save recipe on this device"} <span>→</span></button>
    </form>`;
  document.getElementById("formModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  document.querySelector("#formModal [data-close-modal]").focus();
}

document.addEventListener("click", event => {
  const target = event.target;
  const categoryTile = target.closest(".category-tile");
  const categoryLink = target.closest(".cuisine-link");
  const card = target.closest("[data-open-recipe]");
  const favorite = target.closest("[data-favorite]");
  const recipeTitle = target.closest("[data-open-detail]");
  const close = target.closest("[data-close-modal]");
  const servingButton = target.closest("[data-serving]");
  const startButton = target.closest("[data-start-cooking]");
  const viewButton = target.closest("[data-view]");
  if (categoryTile) { setCategory(categoryTile.dataset.category); return; }
  if (categoryLink) { setCategory(categoryLink.dataset.category); document.querySelector(".sidebar").classList.remove("open"); return; }
  if (favorite) {
    const id = Number(favorite.dataset.favorite);
    if (saved.has(id)) saved.delete(id); else saved.add(id);
    writeStoredArray("hifiSaved", [...saved]);
    updateSavedCount();
    renderRecipes();
    return;
  }
  if (recipeTitle) { openRecipe(recipeTitle.dataset.openDetail); return; }
  const editButton = target.closest("[data-edit-recipe]");
  if (editButton) {
    const recipe = recipes.find(item => item.id === Number(editButton.dataset.editRecipe));
    if (recipe) showRecipeForm(recipe);
    return;
  }
  if (card && !target.closest(".favorite-button")) { openRecipe(card.dataset.openRecipe); return; }
  if (close) { closeModals(); return; }
  if (servingButton) { servings = Math.max(1, Math.min(30, servings + Number(servingButton.dataset.serving))); renderRecipeModal(); return; }
  if (startButton) {
    const id = Number(startButton.dataset.startCooking);
    cooked.add(id);
    writeStoredArray("hifiCooked", [...cooked]);
    closeModals();
    renderChefTable();
    showToast("Added to your cooking history on this device.");
    return;
  }
  if (viewButton) {
    currentView = viewButton.dataset.view;
    activeCategory = "All";
    ingredientMode = false;
    document.getElementById("discoverView").classList.remove("hidden");
    document.getElementById("chefView").classList.add("hidden");
    document.querySelectorAll(".side-link[data-view]").forEach(link => link.classList.toggle("active", link.dataset.view === currentView));
    document.querySelectorAll(".category-tile").forEach(tile => tile.classList.toggle("selected", tile.dataset.category === "All"));
    document.querySelector(".sidebar").classList.remove("open");
    renderRecipes();
    return;
  }
  if (target.closest("[data-show-all]")) { setCategory("All"); showToast("You're seeing all cuisines."); }
});

document.getElementById("recipeSearch").addEventListener("input", event => {
  searchTerm = event.target.value;
  currentView = "discover";
  document.getElementById("discoverView").classList.remove("hidden");
  document.getElementById("chefView").classList.add("hidden");
  document.querySelectorAll(".side-link[data-view]").forEach(link => link.classList.toggle("active", link.dataset.view === "discover"));
  renderRecipes();
});
document.getElementById("sortRecipes").addEventListener("change", renderRecipes);
document.getElementById("ingredientSearch").addEventListener("click", () => {
  lastModalTrigger = document.activeElement;
  document.getElementById("formContent").innerHTML = `<h2 id="formTitle">Cook with what you have</h2><p class="form-intro" id="formIntro">Tell us what's in your kitchen and we'll find recipes that use those ingredients.</p>
    <form class="recipe-form" id="ingredientForm"><label>Your ingredients<input name="ingredients" required placeholder="e.g. chickpeas, spinach, coconut milk"></label>
    <p class="form-intro">We'll show recipes that include at least one ingredient you list.</p><button class="primary-button" type="submit">Find recipes <span>→</span></button></form>`;
  document.getElementById("formModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  document.querySelector("#formModal [data-close-modal]").focus();
});
document.getElementById("clearFilters").addEventListener("click", () => {
  searchTerm = "";
  ingredientMode = false;
  activeCategory = "All";
  currentView = "discover";
  document.getElementById("recipeSearch").value = "";
  document.querySelectorAll(".category-tile").forEach(tile => tile.classList.toggle("selected", tile.dataset.category === "All"));
  renderRecipes();
});
document.getElementById("chefSwitch").addEventListener("click", showChef);
document.getElementById("chefBackToDiscover").addEventListener("click", showDiscover);
document.getElementById("addRecipeButton").addEventListener("click", () => showRecipeForm());
document.getElementById("sidebarChatButton").addEventListener("click", () => assistantRail.classList.add("open"));
document.getElementById("mobileAssistantButton").addEventListener("click", () => assistantRail.classList.add("open"));
document.getElementById("closeAssistant").addEventListener("click", () => assistantRail.classList.remove("open"));
document.getElementById("mobileMenu").addEventListener("click", event => {
  const sidebar = document.querySelector(".sidebar");
  const isOpen = sidebar.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
});
document.getElementById("chatForm").addEventListener("submit", event => { event.preventDefault(); sendChat(document.getElementById("chatInput").value); });
document.querySelectorAll(".quick-question").forEach(button => button.addEventListener("click", () => sendChat(button.dataset.question)));
document.getElementById("formContent").addEventListener("submit", event => {
  if (event.target.id === "ingredientForm") {
    event.preventDefault();
    const values = new FormData(event.target).get("ingredients");
    ingredientTerms = String(values).toLowerCase().split(",").map(term => term.trim()).filter(Boolean);
    ingredientMode = true;
    currentView = "discover";
    activeCategory = "All";
    searchTerm = "";
    document.getElementById("discoverView").classList.remove("hidden");
    document.getElementById("chefView").classList.add("hidden");
    document.getElementById("recipeSearch").value = "";
    document.querySelectorAll(".category-tile").forEach(tile => tile.classList.toggle("selected", tile.dataset.category === "All"));
    document.querySelectorAll(".side-link[data-view]").forEach(link => link.classList.toggle("active", link.dataset.view === "discover"));
    closeModals();
    renderRecipes();
    showToast(`Finding recipes with ${ingredientTerms.join(", ")}.`);
    return;
  }
  if (event.target.id !== "recipeForm") return;
  event.preventDefault();
  const data = new FormData(event.target);
  const category = String(data.get("category"));
  const defaultImage = recipes.find(recipe => recipe.category === category)?.image || recipes[0].image;
  const ingredients = String(data.get("ingredients")).split("\n").map(line => line.trim()).filter(Boolean).map(line => {
    const match = line.match(/^(.+?)\s*:\s*(.+)$/);
    return match ? [match[1].trim(), match[2].trim()] : [line, "As needed"];
  });
  const steps = String(data.get("steps")).split("\n").map(line => line.trim()).filter(Boolean);
  const id = Number(event.target.dataset.recipeId) || Date.now();
  const existing = recipes.find(recipe => recipe.id === id);
  const updatedRecipe = { id, name: String(data.get("name")).trim(), subtitle: String(data.get("subtitle")).trim(), category, cuisine: category, time: Number(data.get("time")), difficulty: String(data.get("difficulty")), rating: existing?.rating || "New", serves: Number(data.get("serves")), calories: Number(data.get("calories")), temperature: String(data.get("temperature")).trim(), image: existing?.image || defaultImage, ingredients, steps, safety: String(data.get("safety")).trim() };
  if (existing) recipes.splice(recipes.indexOf(existing), 1, updatedRecipe);
  else recipes.unshift(updatedRecipe);
  if (!writeStoredArray("hifiCustomRecipes", recipes.filter(recipe => recipe.id > 1e12))) {
    recipes.splice(recipes.indexOf(updatedRecipe), 1);
    if (existing) recipes.push(existing);
    renderChefTable();
    renderRecipes();
    return;
  }
  closeModals();
  renderChefTable();
  renderRecipes();
  showToast("Recipe saved on this device.");
});
document.addEventListener("error", event => {
  const failedImage = event.target;
  if (!(failedImage instanceof HTMLImageElement) || !failedImage.classList.contains("recipe-image") || failedImage.src === fallbackFoodImage) return;
  failedImage.src = fallbackFoodImage;
}, true);
document.getElementById("recipeModal").addEventListener("click", event => { if (event.target.id === "recipeModal") closeModals(); });
document.getElementById("formModal").addEventListener("click", event => { if (event.target.id === "formModal") closeModals(); });
document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); document.getElementById("recipeSearch").focus(); }
  if (event.key === "Escape") { closeModals(); document.querySelector(".sidebar").classList.remove("open"); assistantRail.classList.remove("open"); }
  if (event.key === "Tab") {
    const dialog = document.querySelector(".modal-backdrop:not(.hidden)");
    if (dialog) {
      const focusable = [...dialog.querySelectorAll("button, input, select, textarea, [tabindex]:not([tabindex='-1'])")].filter(element => !element.disabled);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  }
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".recipe-card")) { event.preventDefault(); openRecipe(event.target.dataset.openRecipe); }
});

updateSavedCount();
renderRecipes();
renderChefTable();
if (storageWarnings.length) showToast("Some saved data could not be used. See browser console for details.");
