
import MarqueeText from "react-fast-marquee";

const getProducts = async () => {
  "use cache";

  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products"
  );

  return res.json();
};

const Marquee = async () => {
  const data = await getProducts();

  const banglaUnits = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  };

  const updatedData = data.map((item) => ({
    ...item,
    unit: banglaUnits[item.unit] || item.unit,
  }));

  return (
    <div className="w-full overflow-hidden border-y border-gray-200 bg-white py-3">
      <MarqueeText
        speed={140}
        direction="left"
        
      >
        {updatedData.map((m, i) => (
          <span
            key={i}
            className="mr-8 inline-flex items-center gap-2 whitespace-nowrap text-sm"
          >
            {m.image}

            <span className="font-semibold text-gray-800">
              {m.nameBn}
            </span>

            <span className="text-gray-600">
              টাকা{m.today}/{m.unit}
            </span>

            <span
              className={
                m.change.dir === "up"
                  ? "text-red-500"
                  : "text-green-500"
              }
            >
              {m.change.dir === "up" ? "▲" : "▼"}{" "}
              {Math.abs(m.change.pct)}%
            </span>
          </span>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
