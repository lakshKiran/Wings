import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";
import NavigationFooter from "./NavigationFooter";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.navigation}>
        <FrameComponent1 />
        <div className={styles.subtree}>
          <div className={styles.branchingFactor}>
            <div className={styles.depthLevel}>
              <div className={styles.frameParent}>
                <div className={styles.articlesWrapper}>
                  <div className={styles.articles}>Articles</div>
                </div>
                <div className={styles.frameWrapper}>
                  <button className={styles.frameContainer}>
                    <div className={styles.connectedComponentsWrapper}>
                      <div className={styles.connectedComponents}>
                        <div className={styles.destinations}>Destinations</div>
                      </div>
                    </div>
                  </button>
                </div>
                <div className={styles.hotelsWrapper}>
                  <div className={styles.hotels}>Hotels</div>
                </div>
                <div className={styles.cruisesWrapper}>
                  <div className={styles.cruises}>Cruises</div>
                </div>
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.signUp}>Sign Up</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.treeDiameter}>
        <div className={styles.treeShape}>
          <h1 className={styles.goBoldly}>GO BOLDLY</h1>
          <div className={styles.loveInspiringTravel}>
            Love inspiring travel stories ? Get the latest news delivered to
            your inbox.
          </div>
        </div>
      </div>
      <div className={styles.binarySearchTree}>
        <div className={styles.aVLTree}>
          <FrameComponent
            wakatobi="Wakatobi"
            sandAndSerenityAtWakatobi="Sand and Serenity At Wakatobi’s Turtle Beach"
          />
          <img
            className={styles.images1Icon}
            loading="lazy"
            alt=""
            src="/images-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.forestSegmentation}>
        <div className={styles.connectedComponentsLabeling}>
          <img
            className={styles.marqueeTravelParis800x4501Icon}
            loading="lazy"
            alt=""
            src="/marqueetravelparis800x450-1@2x.png"
          />
          <FrameComponent
            wakatobi="Paris"
            sandAndSerenityAtWakatobi="31 things to do in Paris during the 2024 Olympics"
            propPadding="var(--padding-76xl) 0px 0px"
            propAlignSelf="unset"
          />
        </div>
      </div>
      <div className={styles.graphTraversal}>
        <div className={styles.graphColoring}>
          <div className={styles.biconnectedComponents}>
            <h1 className={styles.articles1}>Articles</h1>
          </div>
          <div className={styles.cutVertices}>
            <div className={styles.connectivity}>
              <div className={styles.graphRepresentation}>
                <div className={styles.dataAggregatorParent}>
                  <div className={styles.dataAggregator}>
                    <div className={styles.conditionBranch}>
                      <h1 className={styles.inputContainer}>+</h1>
                      <div className={styles.outputCollector}>
                        <div className={styles.palau}>Palau</div>
                      </div>
                    </div>
                    <div className={styles.valueComparator}>
                      <a
                        className={styles.terrificReasonsTo}
                        href="https://www.vacationstravel.com/palau/"
                        target="_blank"
                      >
                        14 terrific reasons to visit Palau now
                      </a>
                    </div>
                  </div>
                  <div className={styles.functionCallTree}>
                    <h1 className={styles.h1}>+</h1>
                    <div className={styles.dataProcessor}>
                      <div className={styles.patagonia}>Patagonia</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameDiv}>
                  <div className={styles.parent}>
                    <h1 className={styles.h11}>+</h1>
                    <div className={styles.sydneyWrapper}>
                      <div className={styles.sydney}>Sydney</div>
                    </div>
                  </div>
                  <div className={styles.jonahsRestaurantBoutiqueWrapper}>
                    <div
                      className={styles.jonahsRestaurant}
                    >{`Jonah’s Restaurant & Boutique Hotel is ripe for romance`}</div>
                  </div>
                </div>
                <div className={styles.group}>
                  <h1 className={styles.h12}>+</h1>
                  <div className={styles.indiaWrapper}>
                    <div className={styles.india}>India</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.discoverPatagoniaWithAbercrParent}>
              <div
                className={styles.discoverPatagoniaWith}
              >{`Discover Patagonia with Abercrombie & Kent`}</div>
              <div className={styles.theVtGuideToNorthernIndiWrapper}>
                <div
                  className={styles.theVtGuide}
                >{`The V&T guide to Northern India`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavigationFooter />
    </div>
  );
};

export default LandingPage;
