import Image from 'next/image';
import CardAnimation from '../components/CardAnimation';
import Card from '../components/Card';

const DetailSection = () => {
  return (
    <>
      <CardAnimation className="flex gap-16" animation="slideRight">
        <div className="basis-1/2">
          <Image
            src="/assets/images/features.png"
            alt="Co working space - Features"
            layout="responsive"
            width={460}
            height={240}
          />
        </div>
        <div className="basis-1/2">
          <p className="body-2 text-gradient inline-block">
            ALL ROUNDED WORKSPACE
          </p>
          <h2 className="sub-header-1 mb-6 mt-4 font-plus text-black-80">
            Work efficiently on
            <br />
            an all rounded platform
          </h2>
          <p className="body-2 text-black-70">
            Communicate, collaborate and feel connected in a customizable space
            that suit you or your team preferences.
          </p>
        </div>
      </CardAnimation>

      <CardAnimation className="flex gap-16" animation="slideLeft">
        <div className="basis-1/2">
          <p className="body-2 text-gradient inline-block">PRODUCTIVE TOOLS</p>
          <h2 className="sub-header-1 mb-6 mt-4 font-plus text-black-80">
            Everything you need
            <br />
            to complete your tasks
          </h2>
          <p className="body-2 mb-8 text-black-70">
            Utilize implemented tools, enhancing your and your team efficiency,
            to accomplish your tasks.
          </p>

          {
            //! Add Button - "See how it works ->"
          }
        </div>
        <div className="basis-1/2">
          <Image
            src="/assets/images/tools.png"
            alt="Co working space - Tools"
            layout="responsive"
            width={518}
            height={180}
          />
        </div>
      </CardAnimation>

      <CardAnimation className="flex flex-col gap-10" animation="slideUp">
        <div>
          <p className="body-2 text-gradient inline-block">EVIDENT BENEFITS </p>
          <h2 className="sub-header-1 mb-6 mt-4 font-plus text-black-80">
            Noticeable performance enhancement
          </h2>
          <p className="body-2 mb-8 text-black-70">
            According to survey, More than{' '}
            <span className="text-pink-40">60%</span> of teams who use Co.
            experience enhancement in collaboration, efficiency and
            productivity.
          </p>
        </div>
        <div className="flex justify-between">
          <Card>
            <h6 className="body-1 text-black-80">Collaboration</h6>
            <div>
              <Image
                src="/assets/images/collaborate.png"
                alt="Co working space - Collaborate"
                layout="responsive"
                width={270}
                height={320}
              />
            </div>
          </Card>
          <Card>
            <h6 className="body-1 text-black-80">Efficiency</h6>
            <div>
              <Image
                src="/assets/images/efficiency.png"
                alt="Co working space - Efficiency"
                layout="responsive"
                width={270}
                height={320}
              />
            </div>
          </Card>
          <Card>
            <h6 className="body-1 text-black-80">Productivity</h6>
            <div>
              <Image
                src="/assets/images/productivity.png"
                alt="Co working space - Productivity"
                layout="responsive"
                width={270}
                height={320}
              />
            </div>
          </Card>
        </div>
      </CardAnimation>
    </>
  );
};

export default DetailSection;
