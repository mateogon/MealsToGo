import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
} from "../components/account.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, user, isLoading } = useContext(
    AuthenticationContext
  );

  return (
    <AccountBackground>
      <AccountCover>
        <Title>Meals To Go</Title>
        <AccountContainer>
          <AuthInput
            label="Email"
            value={email}
            textContetType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
          <AuthInput
            label="Password"
            value={password}
            textContetType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          <AuthInput
            label="Repeat Password"
            value={repeatedPassword}
            textContetType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(text) => setRepeatedPassword(text)}
          />
          {error && (
            <Spacer size="large">
              <Text variant="error">{error}</Text>
            </Spacer>
          )}
          <Spacer size="large" />
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => {
                onRegister(email, password, repeatedPassword);
              }}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={"tomato"} size={30} />
          )}
        </AccountContainer>
        <Spacer size="large" />
        <AuthButton
          mode="contained"
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          Back
        </AuthButton>
      </AccountCover>
    </AccountBackground>
  );
};
