import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
  const categories = [
    { name: "Dairy, Bread & Eggs", image: "https://previews.123rf.com/images/vizafoto/vizafoto1012/vizafoto101200160/8410390-bread-milk-and-eggs.jpg" },
    { name: "Fruits & Vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC0xd5BazHbRP3mkByyJNjQtz670MAOkMnLg&s" },
    { name: "Cold Drinks & Juices", image: "https://media.istockphoto.com/id/655123574/photo/soft-drinks-splashing.jpg?s=612x612&w=0&k=20&c=iZcaMSEuzxLRy2lpnUw9NhnTcOhYNgxA3poBbjCsSSc=" },
    { name: "Snacks & Munchies", image: "https://chandravilas.com/wp-content/uploads/2023/06/Jumbo-All-Stars-Snack-Pack.png" },
    { name: "Breakfast & Instant Food", image: "https://gumlet-images.assettype.com/afaqs%2F2021-11%2F6e05af9e-deb8-4d4b-8fc0-a1b0f417a8db%2FInstant_Poha.jpg?auto=format%2Ccompress&w=1200" },
    { name: "Sweet Tooth", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KfRjqJfnuB9YcoNKm3sH9Q00gnn_-Pyj9Q&s" },
    { name: "Bakery & Biscuits", image: "https://5.imimg.com/data5/WJ/RT/XR/ANDROID-59043477/product-jpeg-500x500.jpg" },
    { name: "Tea, Coffee & Health Drink", image: "https://www.worldcoffeeportal.com/getattachment/0c8608f3-9223-4796-9fbe-47e8169dc98d/Robust-instant-coffee-sales-contribute-to-Tata-Coffee%E2%80%99s-strong-first-quarter.jpg" },
    { name: "Atta, Rice & Dal", image: "https://www.jiomart.com/images/product/original/492338750/atta-dal-rice-combo-chakki-atta-5-kg-toor-dal-2-kg-surti-kolam-rice-2-kg-product-images-o492338750-p590318703-0-202407051514.jpg?im=Resize=(420,420)" },
    { name: "Masala, Oil & More", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMVRMd04JIqC2MZyl6jm-R-IRq83uTJetOQ&s" },
    { name: "Sauces & Spreads", image: "https://media.istockphoto.com/id/576594466/photo/various-dip-sauces.jpg?s=612x612&w=0&k=20&c=XkHLBzN-fRB716FJRiIrpQX86u1tJjciuplMd7qvDVo=" },
    { name: "Chicken, Meat & Fish", image: "https://thumbs.dreamstime.com/b/food-collage-various-fresh-meat-chicken-fish-feast-senses-top-view-286288411.jpg" },
    { name: "Organic & Healthy Living", image: "https://images.squarespace-cdn.com/content/v1/570b9bd42fe131a6e20717c2/1579504040926-DYEKKVT0GDMVPM1EBUQM/Organic+India+Kure_Packaging_Elephant+Design+12.jpg" },
    { name: "Baby Care", image: "https://reliefline.net/wp-content/uploads/2019/08/baby-care-kit-1.jpg" },
    { name: "Pharma & Wellness", image: "https://4.imimg.com/data4/QX/FT/MY-29684728/pharmaceuticals-products.jpg" },
    { name: "Cleaning Essentials", image: "https://www.thespruce.com/thmb/c3zQkuO5ywtUaBhQQVAu8T0ZJOw=/4129x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1327576000-010986211f2f46f28e1a32615da231f8.jpg" },
    { name: "Home & Office", image: "https://thumbs.dreamstime.com/b/school-office-supplies-20083457.jpg" },
    { name: "Personal Care", image: "https://t4.ftcdn.net/jpg/01/68/51/55/360_F_168515550_AYObBKUuUS3k0fleEsBI0yxVGVYOm5nm.jpg" },
    { name: "Pet Care", image: "https://www.seppic.com/sites/seppic/files/styles/square_panel/public/2021/10/18/Pet%20care%20products_740x380.jpg?h=fd914ab0&itok=8i795PVp" },
    { name: "Gifts", image: "https://www.giftjaipur.com/image/cache/catalog/products%20images/hamper-choco-roses-500x500.jpg" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 gap-y-10 lg:grid-cols-7 bg-gray-100 p-3 mt-4">
      {categories.map((category, index) => (
        <Link to={`/category/dairy-bread-eggs`} key={index} className="flex flex-col items-center text-center">
          <div className="w-32 h-32 bg-white p-2 rounded-lg shadow-md flex items-center justify-center">
            <img src={category.image} alt={category.name} className="max-w-full max-h-full object-contain" />
          </div>
          <span className="mt-2 text-sm font-medium">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default ProductCategories;
