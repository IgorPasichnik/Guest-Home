import Intro from "../../components/intro/index";
import Header from "../../UI/header";
import Footer from "../../UI/footer";
import Styles from "./Pricing.module.scss";

export default function Pricing() {
  return (
    <>
      <Header />
      <Intro
        height="60vh"
        sizeTextButton="20px"
        flexHeight="space-between"
        sizeLogo="115px"
        nameSize="50px"
      />
      <div className={Styles.pricing}>
        <div className={Styles.pricingContainer}>
          <h2>Цены на проживание</h2>
          <div>
            <table className={Styles.pricingTable}>
              <thead>
                <tr>
                  <th>Категория номера</th>
                  <th>Кол-во мест</th>
                  <th>01.06 - 30.06</th>
                  <th>01.07 - 31.08</th>
                  <th>01.09 - 30.09</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Стандарт 2-х местный</td>
                  <td>2</td>
                  <td>1100,0</td>
                  <td>1200,0</td>
                  <td>1100,0</td>
                </tr>
                <tr>
                  <td>Стандарт 3-х местный</td>
                  <td>3</td>
                  <td>1100,0</td>
                  <td>1200,0</td>
                  <td>1100,0</td>
                </tr>
                <tr>
                  <td>Стандарт 4-х местный</td>
                  <td>4</td>
                  <td>1100,0</td>
                  <td>1200,0</td>
                  <td>1100,0</td>
                </tr>
              </tbody>
            </table>
            <p className={Styles.downTable}>
              Проживание + завтрак(цены указаны с человека в сутки).
            </p>
          </div>

          <div className={Styles.additionally}>
            <h3>Также предоставляем услуги:</h3>
            <div className={Styles.points}>
              <p>Бесплатное покрытие WI-FI.</p>
              <p>Автостоянка.</p>
              <p>Гладильная доска.</p>
              <p>Чайник на территории.</p>
              <p>Можно заказать завтрак, обед, ужин, чай, кофе.</p>
            </div>
            <h3>
              ** Скидки распространяются на детей с минимум двумя взрослыми в
              номере (два места оплачиваются по полной стоимости). Скидки
              обсуждаются в телефонном режиме, так как каждый случай
              индивидуален.
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
