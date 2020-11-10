import React from "react";
import logo from "../../assets/img/logo.png";
import { Row, Col } from "antd";
import "./rules.css";
export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.props.onRef(this);
    this.state = {
      tokenList: [
        {
          id: 1,
          name: "珍珠",
          token_address: "TGbu32VEGpS4kDmjrmn5ZZJgUyHQiaweoq",
          pool_address: "TFasfbowrcRWbEhAh4TeoUjNKdun8QfxiL",
        },
        {
          id: 2,
          name: "珍珠",
          token_address: "TGbu32VEGpS4kDmjrmn5ZZJgUyHQiaweoq",
          pool_address: "TFasfbowrcRWbEhAh4TeoUjNKdun8QfxiL",
        },
        {
          id: 3,
          name: "珍珠",
          token_address: "TGbu32VEGpS4kDmjrmn5ZZJgUyHQiaweoq",
          pool_address: "TFasfbowrcRWbEhAh4TeoUjNKdun8QfxiL",
        },
        {
          id: 4,
          name: "珍珠",
          token_address: "TGbu32VEGpS4kDmjrmn5ZZJgUyHQiaweoq",
          pool_address: "TFasfbowrcRWbEhAh4TeoUjNKdun8QfxiL",
        },
      ],
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="header_box">
          <div className="neck_box">
            <img className="neck_logo" src={logo} alt="" />
          </div>
          <p className="title_text">规则</p>
          <Row gutter={10} type="flex" justify="center">
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 16 }}
              lg={{ span: 16 }}
              xl={{ span: 16 }}
            >
              <div className="ruleBox">
                <div className="rules">
                  <div className="headText">
                    珍珠将以YFI的形式进行分发：非预前开采，无创始人股份，无风投利益-借凭均等的股权分配，以吸引广泛且视野一致的社区来管理协议和代币的未来.
                  </div>
                  <div className="about">
                    <p>关于USDt田园</p>
                    <p>
                      我们的开发团队发现TRC-20USDt代币与TRC-20标准无法兼容。尽管如此，我们的开发团队正在努力为Tron
                      USDt代币编写新的定制合同。继续关注.
                    </p>
                  </div>
                  <div className="problem">
                    <p>数字显示延迟</p>
                    <p>问题: 为何网站上的数字显示会出现延迟?</p>
                    <p>
                      答案: 在打开网站时，本网站将尝试与TronLink进行连接。
                      Tronlink在显示资产一般都回出现延迟，Tronlink经更新后，更新的数字就能显示在网站上.
                    </p>
                  </div>
                  <div className="orePool">
                    <p>矿池</p>
                    <p>USDt 5000</p>
                    <p>USDj 2500</p>
                    <p>JST 2500</p>
                    <p>DZI 5000</p>
                    <p>TRX 2500</p>
                    <p>TAI 5000</p>
                    <p>PEARL-LP 7500</p>
                    <p>添加更多矿池將取決於社區投票。</p>
                  </div>
                  <div className="address">
                    <p>地址</p>
                    {this.state.tokenList.map(function (val) {
                      return (
                        <div className="token_box" key={val.id}>
                          <p>{val.name}</p>

                          <div>代币地址：{val.token_address}</div>
                          <div>矿池地址：{val.pool_address}</div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="timeBox">
                    <p>代币开采时间表</p>
                    <p>代币开采每轮将为期一周.</p>
                  </div>
                  <div className="government">
                    <p>治理</p>
                    <p>
                      剩余的珍珠代币将被锁定在合同中，并完全由珍珠持有者管理，例如，投票决定增加更多的发行矿池.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
