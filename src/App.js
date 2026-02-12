import React, { useState } from "react";
import {
  ShoppingBasket,
  Leaf,
  Beef,
  ArrowRightLeft,
  Trash2,
  Droplets,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Info,
  ChevronRight,
  Utensils,
  Ban,
} from "lucide-react";

const Section = ({ title, icon: Icon, color, children }) => (
  <div className="mb-6 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
    <div
      className={`flex items-center gap-3 p-4 border-b border-slate-50 ${color}`}
    >
      <Icon size={20} className="text-slate-800" />
      <h3 className="font-bold text-slate-800 uppercase tracking-wide text-sm">
        {title}
      </h3>
    </div>
    <div className="p-4">{children}</div>
  </div>
);

const ListItem = ({ label, items }) => (
  <div className="py-2 border-b border-slate-50 last:border-0">
    <span className="font-bold text-slate-700 block md:inline">{label}:</span>
    <span className="text-slate-600 ml-0 md:ml-2 italic">{items}</span>
  </div>
);

const PageOne = () => (
  <div className="animate-in fade-in duration-500">
    <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-6 rounded-r-lg">
      <div className="flex items-center gap-2 mb-1">
        <CheckCircle2 size={18} className="text-emerald-600" />
        <h2 className="text-emerald-800 font-black uppercase text-lg">
          Safe List
        </h2>
      </div>
      <p className="text-emerald-700 text-sm italic">
        These items are generally lower in Phosphorus and Potassium.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Section title="Produce" icon={Leaf} color="bg-emerald-100">
        <ListItem
          label="Berries"
          items="Blueberries, Raspberries, Strawberries"
        />
        <ListItem
          label="Fruits"
          items="Apples, Grapes, Pineapple, Lemons/Limes"
        />
        <ListItem
          label="Veggie Base"
          items="Cabbage, Cauliflower, Onions, Garlic"
        />
        <ListItem
          label="Crisp Veg"
          items="Bell Peppers, Cucumbers, Celery, Radishes"
        />
      </Section>

      <Section title="Protein" icon={Beef} color="bg-blue-100">
        <ListItem
          label="Cleanest"
          items="Egg Whites (Best), Fresh Fish (Not Breaded)"
        />
        <ListItem
          label="Poultry"
          items="Chicken Breast, Turkey Breast (Non-Processed)"
        />
        <ListItem
          label="Alternative"
          items="Tofu (Firm), Seitan (Check Sodium)"
        />
      </Section>

      <Section
        title="Grains & Pantry"
        icon={ShoppingBasket}
        color="bg-amber-100"
      >
        <ListItem
          label="Starches"
          items="White Rice, White Pasta, Sourdough Bread"
        />
        <ListItem label="Flour" items="Corn Tortillas, White Flour, Couscous" />
        <ListItem label="Oils" items="Extra Virgin Olive Oil, Avocado Oil" />
      </Section>

      <div className="space-y-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle size={18} className="text-red-600" />
            <h3 className="font-bold text-red-800 uppercase text-sm">
              The "Limit" List
            </h3>
          </div>
          <p className="text-xs text-red-700 mb-3">
            High in Potassium - use extreme caution:
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs font-medium text-red-900">
            <div className="flex items-center gap-1">
              <Ban size={12} /> Bananas
            </div>
            <div className="flex items-center gap-1">
              <Ban size={12} /> Oranges
            </div>
            <div className="flex items-center gap-1">
              <Ban size={12} /> Tomatoes
            </div>
            <div className="flex items-center gap-1">
              <Ban size={12} /> Spinach
            </div>
            <div className="flex items-center gap-1">
              <Ban size={12} /> Potatoes
            </div>
            <div className="flex items-center gap-1">
              <Ban size={12} /> Avocados
            </div>
          </div>
        </div>

        <div className="bg-sky-600 text-white rounded-xl p-5 shadow-md transform hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-2 mb-2">
            <Flame size={20} className="text-sky-200" />
            <h3 className="font-black uppercase tracking-wider italic text-lg">
              The "Candy" Hack
            </h3>
          </div>
          <p className="font-bold text-sky-100 mb-2">Frozen Grapes.</p>
          <p className="text-sm opacity-90 leading-relaxed">
            Freeze them yourself for a low-fluid, low-potassium candy
            replacement. Perfect for satisfying a sweet tooth while staying on
            plan.
          </p>
        </div>
      </div>
    </div>

    <div className="mt-8 bg-slate-900 text-slate-400 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="bg-slate-800 p-2 rounded-lg">
          <Info className="text-emerald-400" size={24} />
        </div>
        <div>
          <p className="text-white font-bold uppercase text-sm">Warrior Rule</p>
          <p className="text-xs">
            Read the Label. Ingredients must be fruit/veggie ONLY. No Sauce. No
            Sugar.
          </p>
        </div>
      </div>
      <div className="md:text-right">
        <p className="italic text-slate-300 whitespace-nowrap">
          "Success at the store is success at home."
        </p>
      </div>
    </div>
  </div>
);

const PageTwo = () => (
  <div className="animate-in fade-in duration-500">
    <Section
      title="Safe Swaps Strategy"
      icon={ArrowRightLeft}
      color="bg-indigo-100"
    >
      <p className="text-xs text-slate-500 mb-4 uppercase font-bold tracking-widest">
        Upgrade your pantry for sustained energy
      </p>
      <div className="grid grid-cols-1 gap-3">
        {[
          { from: "White Bread", to: "Sourdough, Ezekiel, Corn Tortillas" },
          { from: "Instant Rice", to: "Basmati, Jasmine, Quinoa, Buckwheat" },
          {
            from: "Instant Oatmeal",
            to: "Old Fashioned, Steel Cut, Cream of Rice, Grits",
          },
          {
            from: "Margarine",
            to: "Olive Oil (Extra Virgin), Avocado Oil, Coconut Oil",
          },
        ].map((swap, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 bg-slate-50 rounded-lg group hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-100"
          >
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-400">
                Instead of:
              </span>
              <span className="text-slate-500 line-through font-medium">
                {swap.from}
              </span>
            </div>
            <ChevronRight className="text-slate-300" size={20} />
            <div className="flex flex-col text-right">
              <span className="text-[10px] uppercase font-bold text-emerald-500">
                Choose:
              </span>
              <span className="text-emerald-700 font-bold">{swap.to}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 bg-blue-600 text-white flex items-center gap-2">
          <Droplets size={20} />
          <h3 className="font-black uppercase text-sm">The "Spoon Test"</h3>
        </div>
        <div className="p-5">
          <p className="text-sm text-slate-600 mb-4">
            Determines if oatmeal or grits count as food or fluid in your daily
            limit.
          </p>

          <div className="space-y-4">
            <div className="p-3 border-l-4 border-emerald-500 bg-emerald-50 rounded-r-lg">
              <h4 className="font-bold text-emerald-800 text-sm uppercase mb-1">
                THE TEST (Food)
              </h4>
              <p className="text-xs text-emerald-700">
                Cook thick enough that a spoon stands up in it. Counts as{" "}
                <strong>FOOD</strong> (Safe).
              </p>
            </div>

            <div className="p-3 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
              <h4 className="font-bold text-red-800 text-sm uppercase mb-1">
                THE TRAP (Fluid)
              </h4>
              <p className="text-xs text-red-700">
                If watery/soupy and slides off the spoon. Counts as{" "}
                <strong>FLUID</strong> (Subtract from water limit).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Section
          title="Trash This List"
          icon={Trash2}
          color="bg-slate-800 !text-white"
        >
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-red-600 mb-1">
                <Flame size={14} />
                <h4 className="text-xs font-black uppercase">
                  1. The Phos Bombs
                </h4>
              </div>
              <p className="text-[11px] text-slate-500 mb-1 italic">
                Look for "PHOS" in ingredients list.
              </p>
              <p className="text-xs font-medium text-slate-700">
                Dark Colas, Processed Cheese (Velveeta), Canned Biscuits,
                Pancake Mix, Self-Rising Flour.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-3">
              <div className="flex items-center gap-2 text-red-600 mb-1">
                <Utensils size={14} />
                <h4 className="text-xs font-black uppercase">
                  2. The Sugar Bombs
                </h4>
              </div>
              <p className="text-[11px] text-slate-500 mb-1 italic">
                HFCS hurts kidneys and spikes hunger.
              </p>
              <p className="text-xs font-medium text-slate-700">
                Dried Fruit (Raisins), Gummies, Fruit Snacks, Toaster Pastries,
                BBQ Sauce, Fruit in Syrup.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-3">
              <div className="flex items-center gap-2 text-red-600 mb-1">
                <AlertTriangle size={14} />
                <h4 className="text-xs font-black uppercase">
                  3. The Salt Bombs
                </h4>
              </div>
              <p className="text-[11px] text-slate-500 mb-1 italic">
                Avoid more than 200mg per serving.
              </p>
              <p className="text-xs font-medium text-slate-700">
                Deli Meats (Ham, Bacon, Turkey), Boxed Meals, Instant Ramen, TV
                Dinners.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </div>

    <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start gap-4">
      <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
        <Info size={24} />
      </div>
      <div>
        <h4 className="text-amber-900 font-bold uppercase text-xs">
          Warrior Tip
        </h4>
        <p className="text-amber-800 text-sm leading-relaxed">
          If you haven't mastered reading the label for <strong>"PHOS"</strong>,
          you aren't fighting yet. Take the extra 30 seconds at the shelf—it
          saves your heart and your kidneys.
        </p>
      </div>
    </div>
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState("page1");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      {/* Branding Header */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-slate-900 text-white px-2 py-0.5 rounded font-black text-xs uppercase tracking-tighter">
              Official Toolkit
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-none">
            The Kidney <span className="text-emerald-600">Warrior</span>
          </h1>
          <p className="text-slate-500 mt-2 font-bold uppercase tracking-wide text-sm">
            Shopping Guide and Swap List
          </p>
        </div>

        <div className="flex gap-2 print:hidden">
          <button
            onClick={() => setActiveTab("page1")}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-2 ${
              activeTab === "page1"
                ? "bg-slate-800 text-white shadow-md"
                : "text-slate-500 bg-white hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <ShoppingBasket size={14} />
            Grocery List
          </button>
          <button
            onClick={() => setActiveTab("page2")}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-2 ${
              activeTab === "page2"
                ? "bg-slate-800 text-white shadow-md"
                : "text-slate-500 bg-white hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <ArrowRightLeft size={14} />
            Swap List
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto pb-20">
        {activeTab === "page1" ? <PageOne /> : <PageTwo />}

        {/* Footer Area - Divider only */}
        <div className="mt-12 border-t border-slate-200 pt-8" />
      </main>

      {/* Print-only footer */}
      <div className="hidden print:block fixed bottom-4 left-0 right-0 text-center text-[10px] text-slate-400">
        Kidney Warrior Bootcamp Guide | skool.com/kidneywarriorbootcamp
      </div>
    </div>
  );
};

export default App;
