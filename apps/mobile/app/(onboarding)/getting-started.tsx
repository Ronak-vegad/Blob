import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function GettingStartedScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'left', 'right', 'bottom']}>
      <View className="flex-1 px-8 pb-10 pt-16">
        {/* Hero Section */}
        <View className="flex-1 items-center justify-center">
          <View className="mb-8 items-center justify-center">
            {/* Styled Blob Background */}
            <View className="absolute h-40 w-40 rounded-full bg-blue-50 opacity-50" />
            <View className="h-32 w-32 items-center justify-center rounded-full bg-blue-100 shadow-xl shadow-blue-200">
              <Ionicons name="school" size={60} color="#2563eb" />
            </View>
            <View className="absolute bottom-0 right-0 h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
              <Ionicons name="sparkles" size={24} color="#f59e0b" />
            </View>
          </View>

          <Text className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900">
            Learn Smarter with <Text className="text-blue-600">Blob</Text>
          </Text>
          
          <Text className="text-center text-lg leading-7 text-gray-500">
            Your AI-powered study companion. Transform notes into interactive flashcards and quizzes instantly.
          </Text>
        </View>

        {/* Action Section */}
        <View className="mt-12">
          <Pressable
            className="h-16 items-center justify-center rounded-2xl bg-blue-600 shadow-lg active:bg-blue-700"
            onPress={() => router.push('/(onboarding)/login')}>
            <View className="flex-row items-center">
              <Text className="mr-2 text-xl font-bold text-white">Continue</Text>
              <Ionicons name="arrow-forward" size={20} color="white" />
            </View>
          </Pressable>
        </View>

        {/* Footer info */}
        <Text className="mt-auto text-center text-xs text-gray-400">
          By continuing, you agree to our Terms and Privacy Policy
        </Text>
      </View>
    </SafeAreaView>
  );
}
