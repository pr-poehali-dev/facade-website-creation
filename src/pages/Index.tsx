import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">ФАСАД</h1>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="sm" className="hidden md:flex">Заказать звонок</Button>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Современные фасадные решения
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Проектирование и монтаж вентилируемых фасадов, остекление и облицовка любой сложности
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="px-8">Получить консультацию</Button>
                <Button size="lg" variant="outline" className="px-8">Портфолио</Button>
              </div>
            </div>
            <div className="relative h-[500px] bg-muted rounded-sm overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/d99169be-4839-46a6-9b0c-2b4c1ba07fa8/files/da748372-91a7-4a3e-867d-8c95056fc898.jpg" 
                alt="Современный фасад здания" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-none bg-white">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-accent/10 rounded-sm flex items-center justify-center mb-6">
                  <Icon name="Building2" size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Вентилируемые фасады</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Современные системы с эффективной теплоизоляцией и долговечными материалами
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-white">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-accent/10 rounded-sm flex items-center justify-center mb-6">
                  <Icon name="Grid3x3" size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Остекление фасадов</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Панорамное остекление, структурные системы и светопрозрачные конструкции
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-white">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-accent/10 rounded-sm flex items-center justify-center mb-6">
                  <Icon name="Layers" size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Облицовка и отделка</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Композитные панели, керамогранит, натуральный камень и другие материалы
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Реализованные проекты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative h-80 bg-muted rounded-sm overflow-hidden cursor-pointer">
                <img 
                  src="https://cdn.poehali.dev/projects/d99169be-4839-46a6-9b0c-2b4c1ba07fa8/files/5959c5c2-d4f2-47e0-91be-13eb6f3f0e95.jpg" 
                  alt={`Проект ${item}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Бизнес-центр Метрополис</h3>
                    <p className="text-sm text-white/90">Вентилируемый фасад, 12 000 м²</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Почему выбирают нас</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">15 лет на рынке</h3>
                    <p className="text-muted-foreground">Богатый опыт реализации проектов любой сложности</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Гарантия качества</h3>
                    <p className="text-muted-foreground">Официальная гарантия на все виды работ до 5 лет</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Команда профессионалов</h3>
                    <p className="text-muted-foreground">Сертифицированные специалисты с многолетним опытом</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Соблюдение сроков</h3>
                    <p className="text-muted-foreground">Строгий контроль на всех этапах выполнения работ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] bg-muted rounded-sm overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/d99169be-4839-46a6-9b0c-2b4c1ba07fa8/files/0e4bf4ff-980d-41b4-92b0-10f35c1f3252.jpg" 
                alt="Наша команда" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold mb-6 text-center">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте заявку и мы свяжемся с вами в течение 30 минут
          </p>
          <Card className="border-none shadow-lg">
            <CardContent className="pt-8">
              <form className="space-y-6">
                <div>
                  <Input placeholder="Ваше имя" className="h-12" />
                </div>
                <div>
                  <Input placeholder="Телефон" type="tel" className="h-12" />
                </div>
                <div>
                  <Input placeholder="Email" type="email" className="h-12" />
                </div>
                <div>
                  <Textarea placeholder="Опишите ваш проект" className="min-h-32" />
                </div>
                <Button className="w-full h-12" size="lg">Отправить заявку</Button>
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ФАСАД</h3>
              <p className="text-sm text-primary-foreground/80">
                Современные фасадные решения для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#about" className="hover:text-primary-foreground transition-colors">О нас</a></li>
                <li><a href="#portfolio" className="hover:text-primary-foreground transition-colors">Портфолио</a></li>
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Услуги</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@fasad.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <p className="text-sm text-primary-foreground/80">
                Пн-Пт: 9:00 - 18:00<br />
                Сб-Вс: Выходной
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
            © 2024 ФАСАД. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;